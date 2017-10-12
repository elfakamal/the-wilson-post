import { Post, State } from 'common';
import * as React from 'react';
import { connect } from 'react-redux';

import PostComponent from '../components/Post';

interface Props {
  posts?: Post[];
}

const mapStateToProps = (state: State): State => ({
  posts: state.posts,
});

type AllProps = Readonly<State & Props>;

class Home extends React.Component<AllProps> {
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
    const { posts = [] } = this.props;

    return (
      <div className="wilson-post-home home">
        <div className="wilson-post-list">
          {posts.map(this.renderPost)}
        </div>
      </div>
    );
  }
}

export default connect<State, Props>(mapStateToProps, {})(Home);
