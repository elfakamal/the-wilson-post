import { Post } from 'common';
import * as React from 'react';

interface Props {
  post: Post;
}

export default class extends React.Component<Props, object> {
  static displayName = 'Post';

  render() {
    const { post = {} as Post } = this.props;

    return (
      <section className="wilson-post">
        <header>
          <h3>{post.title}</h3>
        </header>
        <p>{post.description}</p>
        <div className="wilson-post-buttons">
          <button>Edit</button>
        </div>
      </section>
    );
  }
}
