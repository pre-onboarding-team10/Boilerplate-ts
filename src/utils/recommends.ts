import { getRecommendList } from '../api/recommed';
import { SetStateType } from '../types/types';

export async function handleGetRecommends(
  keyword: string,
  setRecommedListData: SetStateType<string[]>,
  page: number,
  limit: number
) {
  const { data } = await getRecommendList(keyword, page);
  console.info(data);
  // if (data.total > 10) {
  //   const { data: newData } = await getRecommendList(keyword, page + 1);
  //   console.info(newData);
  //   setRecommedListData([...data.result, ...newData.result] || []);
  // } else {
  setRecommedListData(data.result || []);
  return data;
  // }
}
