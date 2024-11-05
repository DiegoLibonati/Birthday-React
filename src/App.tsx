import { useState } from "react";

import { Birthday } from "./entities/entities";

import { Item } from "./components/Item/Item.tsx";

import { birthdays as arrBirthdays } from "./data.ts";

import "./App.css";

function App(): JSX.Element {
  const [birthdays, setBirthdays] = useState<Birthday[]>(arrBirthdays);

  const handleClear: React.MouseEventHandler<HTMLButtonElement> = () => {
    setBirthdays([]);
  };

  return (
    <div className="main_container">
      <h2>{birthdays.length} birthdays today</h2>

      {birthdays.map((birthday) => (
        <Item key={birthday.id} birthday={birthday}></Item>
      ))}

      <button onClick={handleClear}>Clear ALL</button>
    </div>
  );
}

export default App;
