import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {

                const { email, password } = credentials;

                if (!email || !password) {
                    throw new Error("Email or password not provided");
                }

                try {
                    const { database } = await connectToDatabase();

                    const user = await database
                    .collection("users")
                    .findOne({ "email": email });

                    if (user) {
                        const matched = await bcrypt.compare(password, user.password);
                    
                        if (matched) {
                            return { email: email };
                        } else {
                            return null;
                        }   
                    }
                } catch (err) {
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