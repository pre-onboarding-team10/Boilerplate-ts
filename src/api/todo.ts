import apiRequest from './index';
import { Todo } from '../types';

const RESOURCE = '/todos';

export const getTodoList = async (): Promise<Todo[]> => {
  try {
    const response = await apiRequest.get<Todo[]>(`${RESOURCE}`);

    return response.data;
  } catch (error) {
    throw new Error('API getTodoList error');
  }
};

export const createTodo = async (data: { title: string }): Promise<Todo> => {
  try {
    const response = await apiRequest.post<Todo, typeof data>(
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
