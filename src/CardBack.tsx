import CardWrapper from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FC } from 'react';

import { ICardBox } from './CardBox';
import Item from './Item';

const CardBack: FC<ICardBox> = ({ character, setCharacterHair }) => {
  return (
    <CardWrapper
      sx={{
        overflow: 'scroll',
        maxWidth: '400.57px',
        mx: 'auto',
        height: '500px',
        background: 'rgba(0,0,0,.2)',
      }}
    >
      <CardContent>
        <Item item={character} onClick={(item) => setCharacterHair(item.hair)} />
      </CardContent>
    </CardWrapper>
  );
};

export default CardBack;
