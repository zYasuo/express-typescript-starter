import { TRouteHandler } from "../lib/routes";
import { Express, RequestHandler } from "express";

export function Routes(method: keyof Express, path: string = "", ...middleware: RequestHandler[]) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const routePath = path;
        const routeHandler: TRouteHandler = Reflect.getMetadata("routeHandler", target) || new Map();

        if (!routeHandler.has(method)) {
            routeHandler.set(method, new Map());
        }

        routeHandler.get(method)?.set(routePath, [...middleware, descriptor.value]);

        Reflect.defineMetadata("routeHandler", routeHandler, target);
    };
}
