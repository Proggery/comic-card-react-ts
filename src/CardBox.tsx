import { Dispatch, FC, SetStateAction } from 'react';
import ReactCardFlip from 'react-card-flip';

import { Character } from './api';
import Card from './Card';
import CardBack from './CardBack';
import { Wrapper } from './CardBox.styles';

export interface ICardBox {
  character: Character;
  setCharacterHair: Dispatch<SetStateAction<string>>;
  isFlipped?: boolean;
}

const CardBox: FC<ICardBox> = ({ character, setCharacterHair, isFlipped }) => {
  return (
    <Wrapper>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card-body">
          <Card
            name={character.name}
            imgUrl={character.img_url}
            gender={character.gender}
          />
        </div>
        <div className="card-body">
          <CardBack character={character} setCharacterHair={setCharacterHair} />
        </div>
      </ReactCardFlip>
    </Wrapper>
  );
};

export default CardBox;
