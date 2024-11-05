import { Birthday } from "../../entities/entities";

interface ItemProps {
  birthday: Birthday;
}

export const Item = ({ birthday }: ItemProps): JSX.Element => {
  const { id, name, age, image } = birthday;

  return (
    <div key={id} className="person_container">
      <img src={image} alt={name}></img>
      <div className="person_container_text">
        <h3>{name}</h3>
        <p>{age} years</p>
      </div>
    </div>
  );
};
