import { characterType } from "../types/character";
import "../styles/characterItem.style.scss";

interface CharacterItemProps {
  character: characterType;
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
  return (
    <div className="character-card">
      <img
        className="character-picture"
        src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
        alt={character.name}
      />
      <span className="character-name">{character.name}</span>
    </div>
  );
};
