import { Routes } from "../decorators/routes";
import { Controller } from "../decorators/controller";
import { Request, Response, NextFunction } from "express";

@Controller()
class MainController {
    @Routes("post", "/healthcheck")
    getHealthCheck(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({
            hello: "world",
            message: "Server is running"
        });
    }
}

export default MainController;
