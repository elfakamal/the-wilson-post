import { Post, State } from 'common';
import * as React from 'react';
import { connect } from 'react-redux';

import {
  requestSchedulePost,
  SchedulePostRequestAction,
} from '../actions';

import PostComponent from '../components/Post';

interface Props {
  post?: Post;
}

interface DispatchProps {
  requestSchedulePost: (post: Post) => SchedulePostRequestAction;
}

const mapStateToProps = (state: State): State => ({
  posts: state.posts,
});

const mapDispatchToProps: DispatchProps = {
  requestSchedulePost,
};

type AllProps = Readonly<State & DispatchProps & Props>;

class Scheduler extends React.Component<AllProps> {
  constructor(props: AllProps) {
    super(props);

    this.renderPost = this.renderPost.bind(this);
  }

  renderPost(post: Post) {
    return (
      <PostComponent post={post} key={post.id} />
    );
  }

  render() {
    return (
      <div className="wilson-post-home">
        <h2>Welcome to the scheduler</h2>
      </div>
    );
  }
}

export default connect<State, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(Scheduler);
