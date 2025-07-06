import {api} from '@api';

import {PageAPI, PageParams} from '../../api/apiTypes';

import {PostAPI} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post', {params});
  return response.data;
}

export const postApi = {
  getList,
};
