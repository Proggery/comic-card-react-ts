import { orange, pink } from '@material-ui/core/colors';
import { Button } from '@mui/material';
import styled from 'styled-components';

type Props = {
  characterId: number;
};

const btnColor1 = orange[500];
const btnColor2 = pink[500];

export const CardIcon = styled.button`
  font-size: 3rem;
  margin-left: 2rem;
  cursor: pointer;
  width: 0 !important;
  height: 0;
  border: none;
`;

export const ReturnButton = styled(Button)`
  max-width: 300px;
  margin: auto !important;
  background: darkcyan !important;
  color: white !important;
  padding: 10px;
  font-size: 1.4rem !important;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Wrapper = styled.div<Props>`
  display: flex;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    28deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  min-width: 100vw;
  min-height: 100vh;

  input {
    background: none;
    max-width: 50px;
    height: 35px;
    border: 2px solid white;
    border-radius: 10px;
    font-size: 1.4rem;
    padding-left: 0.4rem;
    color: white;
  }

  button {
    width: 100%;
    background: ${(props) => (props.characterId > 5 ? btnColor1 : btnColor2)};
  }
`;
