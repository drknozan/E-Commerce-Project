import clientPromise from "../../../lib/mongodb";
import validator from "validator";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ msg: "Only POST requests allowed." });
        return;
    };

    let { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send({ msg: "Please provide email and password." });
        return;
    }

    if (!validator.isEmail(email) || !validator.isStrongPassword(password)) {
        res.status(400).send({ msg: "Please provide valid email and password. Password must have at least one lowercase, one uppercase, one symbol, one number." });
        return;
    }

    const client = await clientPromise;
    const db = client.db("e_commerce");

    // Change with findOne
    const emailAlreadyExists = await db
        .collection("user")
        .find({ "email": email })
        .limit(1)
        .toArray();
    
    if (emailAlreadyExists.length > 0) {
        res.status(400).send({ msg: "Email already in use." });
        return;
    };

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    try {
        db.collection("user").insertOne({ email: email, password: password });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Something went wrong." });
        return;
    }

    res.status(201).send({ status: "ok"});
}