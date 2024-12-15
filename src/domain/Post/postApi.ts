import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://127.0.0.1:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.xWl7KDhBa5KL-9OxRkyYShJnZCAIhJ5rSyU2feCQqsYhbhgbWyCaTtyQvLvu',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;

  // await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  // return postListMock;
}

export const postApi = {
  getList,
};
