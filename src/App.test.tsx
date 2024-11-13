import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "./App";

import "@testing-library/jest-dom";

const BIRTHDAYS_MOCK = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
];

jest.mock("./constants/data.ts", () => ({
  get birthdays() {
    return BIRTHDAYS_MOCK;
  },
}));

const renderComponent = (): { container: HTMLElement } => {
  const { container } = render(<App />);

  return {
    container: container,
  };
};

test("It is expected that the number of birthdays will be rendered in text.", () => {
  renderComponent();

  const headingElement = screen.getByRole("heading", {
    name: new RegExp(`${BIRTHDAYS_MOCK.length} birthdays today`),
  });

  expect(headingElement).toBeInTheDocument();
});

test("Expected to be displayed every birthday", () => {
  const { container } = renderComponent();

  // eslint-disable-next-line
  const itemElements = container.querySelectorAll(".person_container");

  expect(itemElements).toHaveLength(BIRTHDAYS_MOCK.length);
});

test("Tapping the clear button is expected to clear all birthdays.", async () => {
  const { container } = renderComponent();

  // eslint-disable-next-line
  const itemElements = container.querySelectorAll(".person_container");

  expect(itemElements).toHaveLength(BIRTHDAYS_MOCK.length);

  const buttonClear = screen.getByRole("button", { name: /clear all/i });

  await user.click(buttonClear);

  // eslint-disable-next-line
  const notItemElements = container.querySelectorAll(".person_container");

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
