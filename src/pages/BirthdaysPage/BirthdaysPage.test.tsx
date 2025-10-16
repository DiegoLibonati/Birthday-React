import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "@src/App";

import { mockBirthdays } from "@tests/jest.constants";

const renderComponent = (): { container: HTMLElement } => {
  const { container } = render(<App />);

  return {
    container: container,
  };
};

jest.mock("@src/constants/birthdays.ts", () => {
  const { mockBirthdays } = jest.requireActual("@tests/jest.constants");
  return { __esModule: true, default: mockBirthdays };
});

describe("BirthdaysPage.tsx", () => {
  describe("General Tests.", () => {
    test("It is expected that the number of birthdays will be rendered in text.", () => {
      renderComponent();

      const headingElement = screen.getByRole("heading", {
        name: new RegExp(`${mockBirthdays.length} birthdays today`),
      });

      expect(headingElement).toBeInTheDocument();
    });

    test("Expected to be displayed every birthday", () => {
      const { container } = renderComponent();

      // eslint-disable-next-line
      const itemElements = container.querySelectorAll(".person");

      expect(itemElements).toHaveLength(mockBirthdays.length);
    });

    test("Tapping the clear button is expected to clear all birthdays.", async () => {
      const { container } = renderComponent();

      // eslint-disable-next-line
      const itemElements = container.querySelectorAll(".person");

      expect(itemElements).toHaveLength(mockBirthdays.length);

      const buttonClear = screen.getByRole("button", { name: /clear all/i });

      await user.click(buttonClear);

      // eslint-disable-next-line
      const notItemElements = container.querySelectorAll(".person");

      expect(notItemElements).toHaveLength(0);
    });

    test("It is expected that when touching the clear button, the number of text birthdays will render 0.", async () => {
      renderComponent();

      const buttonClear = screen.getByRole("button", { name: /clear all/i });

      await user.click(buttonClear);

      const headingElement = screen.getByRole("heading", {
        name: /0 birthdays today/i,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
