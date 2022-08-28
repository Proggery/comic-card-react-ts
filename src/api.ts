import axios from 'axios';

export interface Character {
  id: number;
  name: string;
  status: string;
  species?: string;
  gender: string;
  hair: string;
  alias: string[];
  origin: string;
  abilities: string[];
  img_url: string;
}

export const fetchCharacter = async (id: number): Promise<Character> => {
  const response = await axios
    .get<Character>(`https://finalspaceapi.com/api/v0/character/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error('hibás lekérdezés' + err);
    });
  return response;
};
