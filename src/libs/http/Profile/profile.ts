import { axios } from 'libs/http/axios';
import { Login } from '../auth/auth.types';
import { getUser } from './profile.types';

export const profile = {
  getUser: (): Promise<{ data: getUser }> => axios.get('/api/users'),

  changePassword: (data = {}): Promise<{ data: string }> =>
    axios.patch('/api/users/changePassword', data),

  changeEmail: (data = {}): Promise<{ data: string }> =>
    axios.patch('/api/users/changeEmail', data),

  forgotPassword: (data = {}): Promise<{ data: string }> =>
    axios.patch('/api/users/forgotPassword', data),

  resetPassword: (data = {}): Promise<{ data: Login }> =>
    axios.patch('/api/users/resetPassword', data),
};
