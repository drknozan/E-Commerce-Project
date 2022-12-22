import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials, req) {

                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error("Email or password not provided");
                }

                const client = await clientPromise;
                const db = client.db("store");
                
                const user = await db
                    .collection("user")
                    .find({ "email": email })
                    .limit(1)
                    .toArray();

                if (!user.length > 0) {
                    throw new Error("No user found with provided email");
                }

                const matched = await bcrypt.compare(password, user[0].password);

                if (matched) {
                    return { email: email };
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    session: {
        strategy: 'jwt',
    }
});