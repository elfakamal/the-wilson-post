import { Action, ReducersMapObject } from 'common';

import {
  POSTS_SUCCESS,
  PostsSuccessAction,
  SCHEDULE_POST_SUCCESS,
  SchedulePostSuccessAction,
} from '../actions';
import { INITIAL_STATE } from '../constants';

const handleActions = (cases: ReducersMapObject) => (
  (state = INITIAL_STATE, action: Action<string>) => (
    (!action || !cases[action.type]) ? state : cases[action.type](state, action)
  )
);

export default handleActions({
  [POSTS_SUCCESS]: (state, { posts }: PostsSuccessAction) => ({
    ...state,
    posts,
  }),

  [SCHEDULE_POST_SUCCESS]: (state, { post }: SchedulePostSuccessAction) => ({
    ...state,
    posts: [
      ...(state.posts || []),
      post,
    ],
  }),
});
