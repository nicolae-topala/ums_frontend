import { axios } from 'libs/http/axios';
import { getUser } from './profile.types';

export const profile = {
  getUser: (): Promise<{ data: getUser }> => axios.get('/api/users'),

  changePassword: (data = {}): Promise<{ data: string }> =>
    axios.patch('/api/users/changePassword', data),

  changeEmail: (data = {}): Promise<{ data: string }> =>
    axios.patch('/api/users/changeEmail', data),
};
