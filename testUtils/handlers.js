import { rest } from "msw";
import mockedResponse from "../__mocks__/responsemock";
import { TEST_URL } from "../constants/routes";
const handlers = [
  rest.get(TEST_URL, (req, res, ctx) => {
    return res(ctx.json(mockedResponse));
  }),
];
export { rest, handlers };
