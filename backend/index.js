import express from "express";
import bodyParser from "body-parser";

import { getEmails } from "./mail.js";

import "./config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/email", async (req, res) => {
    try {
        const emails = await getEmails();
        res.status(200).json(emails);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
