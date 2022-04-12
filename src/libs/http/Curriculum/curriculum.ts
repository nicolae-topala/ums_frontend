import { axios } from 'libs/http/axios';
import { getCurriculum } from './curriculum.types';

export const curriculum = {
  getCurriculum: (): Promise<{ data: getCurriculum[] }> =>
    axios.get('/api/curriculum'),
};
