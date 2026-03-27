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
    <div className="birthdays-page">
      <h2 className="birthdays-page__title">{birthdays.length} birthdays today</h2>

      {birthdays.map((birthday) => (
        <Item
          key={birthday.id}
          age={birthday.age}
          id={birthday.id}
          image={birthday.image}
          name={birthday.name}
        ></Item>
      ))}

      <button onClick={handleClear} className="birthdays-page__clear-all">
        Clear ALL
      </button>
    </div>
  );
};

export default BirthdaysPage;
