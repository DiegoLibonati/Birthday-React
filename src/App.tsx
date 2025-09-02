import { useState } from "react";

import { Birthday } from "./entities/entities";

import { Item } from "./components/Item/Item";

import { birthdays as arrBirthdays } from "./constants/data";

import "./App.css";

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

      <button onClick={handleClear} className="birthday-app__clear-all">Clear ALL</button>
    </div>
  );
}

export default App;
