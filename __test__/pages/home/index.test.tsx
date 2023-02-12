import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "@/app/page";

describe("Home Page", () => {
  it("Should find text 'My Cv'", () => {
    const { getByText } = render(<Home />);
    expect(getByText(/My Cv/)).toHaveTextContent(/My Cv/);
  });

  it("Should find text 'testing deploy nextjs app on vercel with github actions.'", () => {
    const { getByText } = render(<Home />);

    expect(
      getByText(/testing deploy nextjs app on vercel with github actions./)
    ).toHaveTextContent(
      /testing deploy nextjs app on vercel with github actions./
    );
  });
});
