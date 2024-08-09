import { CharacterType } from '../types/character';
import '../styles/characterItem.style.scss';

interface CharacterItemProps {
  character: CharacterType;
  onClick: (id: number) => void;
}

export const CharacterItem = ({
  character,
  onClick: onClickProps,
}: CharacterItemProps) => {
  const handleClick = () => {
    onClickProps(character.id);
  };
  return (
    <div className="character-item-card" onClick={handleClick}>
      <img
        className="character-item-picture"
        src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
        alt={character.name}
      />
      <span className="character-item-name">{character.name}</span>
    </div>
  );
};
