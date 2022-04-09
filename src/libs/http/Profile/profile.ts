import { axios } from 'libs/http/axios';

export const profile = {
  changePassword: (data = {}): Promise<{ data: any }> =>
    axios.patch('/api/changePassword', data),
};
