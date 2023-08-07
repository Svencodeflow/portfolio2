import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({
    path: fileURLToPath(new URL(".env", import.meta.url)),
});

console.log(
    "process.env.PATHNAME",
    fileURLToPath(new URL(".env", import.meta.url))
);
