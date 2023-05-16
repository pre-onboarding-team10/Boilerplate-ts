import { TodoDataType, TodoInputType } from '../types/types';
import apiRequest from './index';

const RESOURCE = '/todos';

export const getTodoList = async (): Promise<TodoDataType[]> => {
  try {
    const response = await apiRequest.get<TodoDataType[]>(`${RESOURCE}`);
    return response.data;
  } catch (error) {
    throw new Error('API getTodoList error');
  }
};

export const createTodo = async (
  data: TodoInputType
): Promise<TodoDataType> => {
  try {
    const response = await apiRequest.post<TodoDataType, typeof data>(
      `${RESOURCE}`,
      data
    );
    return response.data;
  } catch (error) {
    throw new Error('API createTodo error');
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await apiRequest.delete(`${RESOURCE}/${id}`);
  } catch (error) {
    throw new Error('API deleteTodo error');
  }
};
