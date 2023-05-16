import { RecommendDataType } from '../types/types';
import apiRequest from './index';

const RESOURCE = '/search';
const API_SEARCH_ERROR = 'API getRecommendList error'

export const getRecommendList = async (keyword: string, page: number): Promise<RecommendDataType> => {
  try {
    const response = await apiRequest.get<RecommendDataType>(
      `${RESOURCE}`,
      { params: { q: keyword, page: page } },
    );
    return response.data;
  } catch (error) {
    throw new Error(API_SEARCH_ERROR);
  }
};
