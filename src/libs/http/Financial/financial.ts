import { axios } from 'libs/http/axios';
import { getPayments } from './financial.types';

export const financial = {
  getPayments: (): Promise<{ data: getPayments[] }> =>
    axios.get('/api/payments'),
};
