import { useState } from "react";

import { Birthday } from "@src/entities/entities";

import { Item } from "@src/components/Item/Item";

import { birthdays as arrBirthdays } from "@src/constants/data";

import "@src/App.css";

function App(): JSX.Element {
  const [birthdays, setBirthdays] = useState<Birthday[]>(arrBirthdays);

  const handleClear: React.MouseEventHandler<HTMLButtonElement> = () => {
    setBirthdays([]);
  };

  return (
    <div className="birthday-app">
      <h2 className="birthday-app__title">
        {birthdays.length} birthdays today
      </h2>

      {birthdays.map((birthday) => (
        <Item key={birthday.id} birthday={birthday}></Item>
      ))}

      <button onClick={handleClear} className="birthday-app__clear-all">
        Clear ALL
      </button>
    </div>
  );
}

export default App;
