import { Birthday } from "../../entities/entities";

interface ItemProps {
  birthday: Birthday;
}

export const Item = ({ birthday }: ItemProps): JSX.Element => {
  const { id, name, age, image } = birthday;

  return (
    <div key={id} className="person">
      <img src={image} alt={name}></img>
      <div className="person__description">
        <h3>{name}</h3>
        <p>{age} years</p>
      </div>
    </div>
  );
};
