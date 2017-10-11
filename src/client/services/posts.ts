import { Post } from 'common';
import * as urlJoin from 'url-join';

import { API_ROOT } from '../constants';
import Request from './Request';

export const getPosts = async () => (
  await Request.get(urlJoin(API_ROOT, 'api', 'posts'))
);

export const addPost = async (post: Post) => {
  const payload = { post };

  const url = urlJoin(API_ROOT, 'posts');
  return await Request.post(url, payload);
};
