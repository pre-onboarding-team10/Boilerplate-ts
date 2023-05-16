import { getRecommendList } from '../api/recommend';

export async function handleGetRecommends(
  keyword: string,
  page: number,
  limit: number
) {
  const data = await getRecommendList(keyword, page);
  return data;
}
