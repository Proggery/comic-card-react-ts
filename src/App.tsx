import { yellow } from '@material-ui/core/colors';
import { Box, Button, Grid, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { FC, useEffect, useRef, useState } from 'react';

import { Character, fetchCharacter } from './api';
import { CardIcon, Content, ReturnButton, Wrapper } from './App.styles';
import CardBox from './CardBox';
import { useCharacterId } from './Context';

const App: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [character, setCharacter] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState(false);
  const [characterHair, setCharacterHair] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const { characterId, setCharacterId } = useCharacterId();
  const hairColor = yellow['A200'];

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };

    fetchFromApi();
  }, [characterId]);

  const handleClick = (): void => {
    const id = Number(inputRef.current?.value);
    setCharacterId(id);
  };

  const flippedCard = (): void => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <Box width="100%" display="flex" flexDirection="column">
          <LinearProgress />
          <ReturnButton onClick={() => window.location.reload()}>
            Back to Home ...
          </ReturnButton>
        </Box>
      ) : (
        <Content>
          <Box sx={{ color: 'white' }}>
            <CardBox
              isFlipped={isFlipped}
              character={character}
              setCharacterHair={setCharacterHair}
            />
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              marginTop={1}
            >
              <Grid item xs={4}>
                <h4>Give ID Number:</h4>
              </Grid>
              <Grid item xs={3}>
                <input ref={inputRef} />
              </Grid>
              <Grid item xs={5}>
                <Button onClick={handleClick} variant="contained">
                  Find Character!
                </Button>
              </Grid>
            </Grid>
            {characterHair && (
              <Grid container marginTop={2}>
                <Typography alignSelf="end">Character Hair color:</Typography>
                <Typography variant="h5" color={hairColor} marginLeft={1}>
                  {characterHair}
                </Typography>
              </Grid>
            )}
          </Box>
          <CardIcon onClick={flippedCard}>🔄</CardIcon>
        </Content>
      )}
    </Wrapper>
  );
};

export default App;
