import { screen, waitFor, render } from "@testing-library/react";
import mockedResponse from "../__mocks__/responsemock";
import Home, { getServerSideProps } from "../pages/index";
import { server } from "../testUtils/server";
import { rest } from "msw";
import { TEST_URL } from "../constants/routes";

describe("testing template for nextjs", () => {
  it("shows list messages from API", async () => {
    const data = await getServerSideProps();
    render(<Home {...data.props} />);

    await waitFor(() => {
      mockedResponse.posts.forEach(({ title }) => {
        expect(
          screen.getByText(title.replace(/\\n/g, " "))
        ).toBeInTheDocument();
      });
    });
  });


  it("what happens if there is an error on the api", async () => {
    server.use(
      rest.get(TEST_URL, (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    const data = await getServerSideProps();

    render(<Home {...data.props} />);

    await waitFor(() => {
      expect(
        screen.getByText("Something went wrong, please try again")
      ).toBeInTheDocument();
    });
  });
});
