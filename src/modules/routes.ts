import { Express } from "express";
import { TRouteHandler } from "../lib/routes";

export function RegisterControllers(app: Express, controllers: any[]) {
    for (const ControllerClass of controllers) {
        const instance = new ControllerClass();
        const baseRoute = Reflect.getMetadata("baseRoute", ControllerClass) || "";
        const routeHandler: Map<string, Map<string, any[]>> = Reflect.getMetadata("routeHandler", ControllerClass) || new Map();

        for (const [method, routes] of routeHandler.entries()) {
            for (const [path, handlers] of routes.entries()) {
                const fullPath = `${baseRoute}${path}`;
                (app as any)[method](fullPath, ...handlers.map((fn) => fn.bind(instance)));
            }
        }
    }
}
