// jest.setup.js
//put seTup files here
import "@testing-library/jest-dom/extend-expect";
//start msw mocking server service
import { server } from "../testUtils/server";
import "whatwg-fetch";
beforeAll(() => {
  server.listen({
    onUnhandledRequest: "warn",
  });
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
