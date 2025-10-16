import { useState } from "react";

import { Birthday } from "@src/entities/app";

import { Item } from "@src/components/Item/Item";

import arrBirthdays from "@src/constants/birthdays";

import "@src/pages/BirthdaysPage/BirthdaysPage.css";

export const BirthdaysPage = () => {
  const [birthdays, setBirthdays] = useState<Birthday[]>(arrBirthdays);

  const handleClear: React.MouseEventHandler<HTMLButtonElement> = () => {
    setBirthdays([]);
  };

  return (
    <div className="birthdays-page">
      <h2 className="birthdays-page__title">
        {birthdays.length} birthdays today
      </h2>

      {birthdays.map((birthday) => (
        <Item key={birthday.id} birthday={birthday}></Item>
      ))}

      <button onClick={handleClear} className="birthdays-page__clear-all">
        Clear ALL
      </button>
    </div>
  );
};
