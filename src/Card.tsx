import CardWrapper from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { StyledComponent } from 'styled-components';

import { StyledGender } from './Card.styles';

type Props = {
  name: string;
  imgUrl: string;
  gender: string;
};

const Card: FC<Props> = ({ name, imgUrl, gender }) => {
  return (
    <CardWrapper
      sx={{
        mx: 'auto',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia component="img" height="340" image={imgUrl} alt={name} />
      <CardContent>
        <Typography textAlign="center" gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <StyledGender<StyledComponent<FC<Props>, any, Props, never>>
        color={gender === 'Male' ? 'lightblue' : 'lightgreen'}
        gender={gender}
      />
    </CardWrapper>
  );
};

export default Card;
