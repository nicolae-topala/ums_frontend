import { axios } from 'libs/http/axios';
import { getDiscounts, getPayments } from './financial.types';

export const financial = {
  getPayments: (): Promise<{ data: getPayments[] }> =>
    axios.get('/api/payments'),

  getDiscounts: (): Promise<{ data: getDiscounts[] }> =>
    axios.get('/api/discounts'),
};
