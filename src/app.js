// TODO Implement this wrapper!!

import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

export const runApp = () => {
    const app = express();

    // Midwares
    app.use(
        cors({
            origin: "*",
            methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
            credentials: false,
        })
    )
    app.use(morgan("combined"));
    app.use(express.json({ limit: "100mb "}));
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.set("trust proxy", true);

    /// For fancy home page
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "public")));

    return app;
  
};

export const closeApp = (app) => {
    // TODO: Must add error middleware to this
    app.use(console.error("Server Shutdown"));

    app.use("*", (req, res) => {
        res.status(500).json({
            success: false,
            server: "online",
            message: "Something went horribly wrong with the server, try reloading",
        });
    });
};