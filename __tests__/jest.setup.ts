import "@testing-library/jest-dom";

import { mockBirthdays } from "@tests/__mocks__/birthdays.mock";

jest.mock("@/constants/birthdays", () => {
  return { __esModule: true, default: mockBirthdays };
});
