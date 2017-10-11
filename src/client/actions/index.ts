// tslint:disable:no-empty-interface
import { Action, Post } from 'common';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';

export interface PostsRequestAction extends Action<typeof POSTS_REQUEST> {}
export interface PostsSuccessAction extends Action<typeof POSTS_SUCCESS> {
  posts: Post[];
}
export interface PostsFailureAction extends Action<typeof POSTS_FAILURE> {}

export const loadPosts = (): PostsRequestAction => (
  { type: POSTS_REQUEST }
);

export const setPosts = (posts: Post[]): PostsSuccessAction => {
  return { type: POSTS_SUCCESS, posts };
};

/**
 * Schedule Post
 */
export const SCHEDULE_POST_REQUEST = 'SCHEDULE_POST_REQUEST';
export const SCHEDULE_POST_SUCCESS = 'SCHEDULE_POST_SUCCESS';
export const SCHEDULE_POST_FAILURE = 'SCHEDULE_POST_FAILURE';

export interface SchedulePostRequestAction extends Action<typeof SCHEDULE_POST_REQUEST> {
  post: Post;
}
export interface SchedulePostSuccessAction extends Action<typeof SCHEDULE_POST_SUCCESS> {
  post: Post;
}
export interface SchedulePostFailureAction extends Action<typeof SCHEDULE_POST_FAILURE> {
  error: any;
}

export const requestSchedulePost = (post: Post): SchedulePostRequestAction => {
  return { type: SCHEDULE_POST_REQUEST, post };
};
export const setScheduledPost = (post: Post): SchedulePostSuccessAction => {
  return { type: SCHEDULE_POST_SUCCESS, post };
};
export const errorSchedulePost = (error: any): SchedulePostFailureAction => {
  return { type: SCHEDULE_POST_FAILURE, error };
};
