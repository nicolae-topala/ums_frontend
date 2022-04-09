import { axios } from 'libs/http/axios';
import { Login } from './auth.types';

export const auth = {
  login: (data = {}): Promise<{ data: Login }> =>
    axios.post('/api/sessions', data),
  logout: (): Promise<{ data: Login }> => axios.delete('/api/sessions'),
};
