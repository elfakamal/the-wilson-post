declare module 'common' {
  import { Reducer } from 'redux';

  interface Action<T extends string> {
    type: T;
  }

  interface Dict<T> {
    [key: string]: T;
  }

  interface ReducersMapObject {
    [key: string]: Reducer<State>;
  }

  interface State {
    posts?: Post[];
    selectedPost?: Post;
  }

  interface Author {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }

  interface Post {
    id: number;
    title: string;
    author: string;
    description: string;
    date: number;
  }
}
