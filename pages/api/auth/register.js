import { connectToDatabase } from "../../../lib/mongodb";
import validator from "validator";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send({ msg: "Only POST requests allowed." });
    };

    let { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ msg: "Please provide email and password." });
    }

    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
        return res.status(400).send({ msg: "Please provide valid email and password. Password must have at least one lowercase, one uppercase, one symbol, one number." });
    }

    try {
        const { database } = await connectToDatabase();

        const emailAlreadyExists = await database
        .collection("users")
        .findOne({ "email": email });

        if (emailAlreadyExists) {
            return res.status(400).send({ msg: "Email already in use." });
        };
    
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        await database.collection("users").insertOne({ email: email, password: password });
    } catch (err) {
        return res.status(500).send({ msg: "Something went wrong." });
    }

    return res.status(201).send({ msg: "Account created"});
}