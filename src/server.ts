import "reflect-metadata";
import http from "http";
import express from "express";
import { CorsHandler } from "./middleware/cors-handler.middleware";
import { SERVER_PORT } from "./config/config";
import MainController from "./controllers/main";
import { RegisterControllers } from "./modules/routes";
import { NotFoundRouteHandler } from "./middleware/not-found-route.middleware";

export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const MainServer = () => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(CorsHandler);
    RegisterControllers(app, [MainController]);
    app.use(NotFoundRouteHandler);

    httpServer = http.createServer(app);
    httpServer.listen(SERVER_PORT, () => {
        console.log(`Server is running on port ${SERVER_PORT}`);
    });
};

export const ShoutdownServer = (callback: any) => httpServer && httpServer.close(callback);

MainServer();
