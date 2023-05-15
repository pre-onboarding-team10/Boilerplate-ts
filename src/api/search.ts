import apiRequest from './index';

const RESOURCE = '/search';

export const getKeyword = async (data: string) => {
  try {
    const response = await apiRequest.get(`${RESOURCE}`, {
      params: { q: data, page: 1, limit: 10 },
    });

    return response;
  } catch (error) {
    throw new Error('API getKeyword error');
  }
};
