import axios from 'axios';

interface IAccountQueryParams {
  page: number;
  country: string;
  errorsCount: number;
  seed: number;
}

export const getAccounts = (params: IAccountQueryParams) => {
  return axios.get('/api/accounts', { params });
};
