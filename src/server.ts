import http from "http";
import express from "express";
import { corsHandler } from "./middleware/cors-handler.middleware";
import { SERVER_PORT } from "./config/config";
import { notFoundRouteHandler } from "./middleware/not-found-route.middleware";

export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const MainServer = () => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(corsHandler);

    app.get("/main/healthcheck", (req, res) => {
        res.status(200).json({
            hello: "world",
            message: "Server is running"
        });
    });

    app.use(notFoundRouteHandler);

    httpServer = http.createServer(app);
    httpServer.listen(SERVER_PORT, () => {
        console.log(`Server is running on port ${SERVER_PORT}`);
    });
};

export const ShoutdownServer = (callback: any) => httpServer && httpServer.close(callback);

MainServer();