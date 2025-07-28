import { Express } from "express";
import { TRouteHandler } from "../lib/routes";

export function DefineRoutes(controllers: any, app: Express) {
    for (let i = 0; i < controllers.length; i++) {
        const controller = new controllers[i]();

        const routeHandlers: TRouteHandler = Reflect.getMetadata("routeHandler", controller);
        const controllerPath = Reflect.getMetadata("baseRoute", controller.constructor);
        const methods = Array.from(routeHandlers.keys());

        for (let j = 0; j < methods.length; j++) {
            const method = methods[j];
            const routes = routeHandlers.get(method);

            if (routes) {
                const routeNames = Array.from(routes.keys());

                for (let k = 0; k < routeNames.length; k++) {
                    const handlers = routes.get(routeNames[k]);

                    if (handlers) {
                        app[method](controllerPath + routeNames[k], handlers);
                    }
                }
            }
        }
    }
}
