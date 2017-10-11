import { Action, Post, State } from 'common';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import * as Rx from 'rxjs';

import {
  errorSchedulePost,
  POSTS_REQUEST,
  SCHEDULE_POST_FAILURE,
  SCHEDULE_POST_REQUEST,
  SCHEDULE_POST_SUCCESS,

  SchedulePostFailureAction,
  SchedulePostRequestAction,

  setPosts,
  setScheduledPost,
} from '../actions';

import {
  addPost,
  getPosts,
} from '../services/posts';

type TEpic = Epic<Action<string>, State>;

const getPostsEpic: TEpic = (action$: ActionsObservable<Action<typeof POSTS_REQUEST>>) =>
  action$.ofType(POSTS_REQUEST)
    .mergeMap(() => (
      Rx.Observable.fromPromise(getPosts())
        .map((posts: Post[]) => setPosts(posts))
    ));

const addPostEpic: TEpic = (
  action$: ActionsObservable<Action<typeof SCHEDULE_POST_REQUEST>>,
): Rx.Observable<Action<typeof SCHEDULE_POST_SUCCESS | typeof SCHEDULE_POST_FAILURE>> =>
  action$.ofType(SCHEDULE_POST_REQUEST)
    .mergeMap((action: SchedulePostRequestAction) => (
      Rx.Observable.fromPromise(addPost(action.post))
        .map((post: Post) => setScheduledPost(post))
        .catch((error: any): Rx.Observable<SchedulePostFailureAction> => (
          Rx.Observable.of(errorSchedulePost(error))
        ))
    ));

export default combineEpics(getPostsEpic, addPostEpic);
