import { Birthday } from "../../entities/entities";

import "./Item.css";

interface ItemProps {
  birthday: Birthday;
}

export const Item = ({ birthday }: ItemProps): JSX.Element => {
  const { id, name, age, image } = birthday;

  return (
    <div key={id} className="person">
      <img src={image} alt={name} className="person__img"></img>
      <div className="person__description">
        <h3 className="person__name">{name}</h3>
        <p className="person__years">{age} years</p>
      </div>
    </div>
  );
};
