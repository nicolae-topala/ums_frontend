import { axios } from 'libs/http/axios';
import { getCurriculum, getGrades } from './curriculum.types';

export const curriculum = {
  getCurriculum: (): Promise<{ data: getCurriculum[] }> =>
    axios.get('/api/students/curriculum'),

  getGrades: (): Promise<{ data: getGrades[] }> =>
    axios.get('/api/students/grades'),
};
