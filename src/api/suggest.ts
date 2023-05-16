import apiRequest from './index';

export const getSuggestList = async (inputText: string, nowPage: number) => {
  try {
    const response = await apiRequest.get({
      url: `/search?q=${inputText}&page=1&limit=${nowPage}0`,
    });

    return response;
  } catch (error) {
    throw new Error('API getTodoList error');
  }
};
