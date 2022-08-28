import { Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  gender: string;
  className: string;
};

const Gender: FC<Props> = ({ className, gender }) => {
  return (
    <Typography
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      variant="h6"
      className={className}
    >
      Gender: {gender}
    </Typography>
  );
};

export default Gender;
