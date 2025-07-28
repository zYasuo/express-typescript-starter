import request from "supertest";
import { app, ShoutdownServer } from "../../src/server";

describe("Our application", () => {
    afterAll((done) => {
        ShoutdownServer(done);
    });
    it("starts and has the proper test environment", async () => {
        expect(process.env.NODE_ENV).toBe("test");
        expect(app).toBeDefined();
    }, 1000);

    it("return all options allowed to be called by customers (https method)", async () => {
        const response = await request(app).options("/");

        expect(response.status).toBe(200);
        expect(response.headers["access-control-allow-methods"]).toContain("PUT, POST, GET, DELETE, PATCH");
    });

    it("returns a 404 for an invalid route", async () => {
        const routeInvalid = "/invalid-route";
        const response = await request(app).get(routeInvalid);

        expect(response.status).toBe(404);
        expect(response.body).toEqual({
            message: "Not Found",
            path: routeInvalid,
            status: 404,      
        });
    });
});
