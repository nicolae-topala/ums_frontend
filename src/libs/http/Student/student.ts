import { axios } from 'libs/http/axios';
import { getStudent } from './student.types';

export const student = {
  getStudent: (): Promise<{ data: getStudent }> => axios.get('/api/students'),
};
