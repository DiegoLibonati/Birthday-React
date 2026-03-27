import { ItemProps } from "@/types/props";

import "@/components/Item/Item.css";

const Item = ({ age, id, image, name }: ItemProps) => {
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

export default Item;
