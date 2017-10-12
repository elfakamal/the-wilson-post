import { Post } from 'common';
import * as React from 'react';

interface Props {
  post: Post;
}

const dateOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
};

export default class extends React.Component<Props, object> {
  static displayName = 'Post';

  render() {
    const { post = {} as Post } = this.props;
    const date = new Date(post.date);

    return (
      <div className="posts-teaser slice" key={post.id}>
        <div className="container">
          <h2 className="posts-title">
            {post.title}
          </h2>

          <time className="posts-date meta">
            <span className="meta-content">
              {date.toLocaleString('en-US', dateOptions)}
              {' at '}
              {date.toLocaleTimeString('en-US', timeOptions)}
              {post.author}
            </span>
          </time>

          <p>{post.description}</p>
        </div>
      </div>
    );
  }
}
