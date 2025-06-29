import {PageAPI} from '../../api/apiTypes';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://10.0.2.2:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mw.GdHtNGUzxlmSnY8UTxP5tNkf9gt0bimQSR8Cj2pJrg5cvwCC41SGdqvMqdsc',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
