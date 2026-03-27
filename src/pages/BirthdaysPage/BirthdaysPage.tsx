import { useState } from "react";

import { Birthday } from "@/types/app";

import Item from "@/components/Item/Item";

import arrBirthdays from "@/constants/birthdays";

import "@/pages/BirthdaysPage/BirthdaysPage.css";

const BirthdaysPage = () => {
  const [birthdays, setBirthdays] = useState<Birthday[]>(arrBirthdays);

  const handleClear: React.MouseEventHandler<HTMLButtonElement> = () => {
    setBirthdays([]);
  };

  return (
    <main className="birthdays-page" aria-label="Today's birthdays">
      <h2 className="birthdays-page__title">{birthdays.length} birthdays today</h2>

      <ul className="birthdays-page__list" aria-label="Birthday list">
        {birthdays.map((birthday) => (
          <Item
            key={birthday.id}
            age={birthday.age}
            image={birthday.image}
            name={birthday.name}
          ></Item>
        ))}
      </ul>

      <button
        onClick={handleClear}
        className="birthdays-page__clear-all"
        aria-label="Clear all birthdays from the list"
      >
        Clear ALL
      </button>
    </main>
  );
};

export default BirthdaysPage;
