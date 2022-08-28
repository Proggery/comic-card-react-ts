import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

type CharacterIdType = {
  characterId: number;
  setCharacterId: Dispatch<SetStateAction<number>>;
};

const Context = createContext<CharacterIdType>({} as CharacterIdType);

const CharacterIdPropvider: FC = ({ children }) => {
  const [characterId, setCharacterId] = useState(1);

  return (
    <Context.Provider value={{ characterId, setCharacterId }}>
      {children}
    </Context.Provider>
  );
};

export default CharacterIdPropvider;

export const useCharacterId = () => useContext(Context);
