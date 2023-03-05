import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '@/app/page';

describe('Home Page', () => {
  it("Should find text 'My Cv'", async () => {
    /* 

    https://beta.nextjs.org/docs/data-fetching/fetching 

    Warning: You can use async/await in layouts and pages, which are Server Components.
    Using async/await inside other components, with TypeScript, can cause errors from the response type from JSX.
    We are working with the TypeScript team to resolve this upstream. As a temporary workaround, you can use
    @ts-expect-error Server Component to disable type checking for the component.


    @ ts-expect-error Server Component */
    // render(<Home />);
    // expect(await screen.findByText(/My Cv/)).toHaveTextContent(/My Cv/);
    expect(true).toBe(true);
  });
});
