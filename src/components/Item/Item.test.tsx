import { screen, render } from "@testing-library/react";

import { Item } from "./Item";

test("It is expected that the given props will be rendered.", () => {
  const birthday = {
    id: 1,
    name: "Jose",
    age: 23,
    image:
      "https://cdn.pixabay.com/photo/2020/08/29/16/07/pikachu-5527375_1280.jpg",
  };

  render(<Item birthday={birthday} />);

  const imgElement = screen.getByRole("img");
  const nameElement = screen.getByRole("heading", {
    name: birthday.name,
  });
  const ageElement = screen.getByText(`${birthday.age} years`);

  expect(imgElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(ageElement).toBeInTheDocument();

  expect(imgElement).toHaveAttribute("src", birthday.image);
  expect(imgElement).toHaveAttribute("alt", birthday.name);
});
