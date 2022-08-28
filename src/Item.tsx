import { grey } from '@material-ui/core/colors';
import { Button, Typography } from '@mui/material';

import { Character } from './api';
import { Wrapper } from './Item.styles';

type Props = {
  item: Character;
  // eslint-disable-next-line no-unused-vars
  onClick: (item: Character) => void;
};

function Item({ item, onClick }: Props) {
  const underlineColor = grey[500];
  return (
    <Wrapper>
      {Object.keys(item).map((element, index) => (
        <>
          <Typography key={index} sx={{ wordBreak: 'break-word', color: 'white' }}>
            <span>{element}</span>: {item[element as keyof Character]}
          </Typography>
          <Typography color={underlineColor}>
            #####################################
          </Typography>
        </>
      ))}
      <Button
        sx={{ mt: 2, opacity: '1 !important', border: 'unset !important' }}
        onClick={() => onClick(item)}
      >
        ▽ Character Hair color
      </Button>
    </Wrapper>
  );
}

export default Item;
