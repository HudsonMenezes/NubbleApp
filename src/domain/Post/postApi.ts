import {api} from '@api';

import {PageAPI} from '../../api/apiTypes';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000)); // Simulate a delay
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  return response.data;
}

export const postApi = {
  getList,
};
