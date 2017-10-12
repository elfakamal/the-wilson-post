import { Post, State } from 'common';
import * as React from 'react';
import { connect } from 'react-redux';

import { History } from 'history';

import {
  requestSchedulePost,
  SchedulePostRequestAction,
} from '../actions';

import FormGroup from '../components/FormGroup';

interface Props {
  selectedPost?: Post;
  history: History;
}

interface DispatchProps {
  requestSchedulePost: (post: Post) => SchedulePostRequestAction;
}

const mapStateToProps = ({ selectedPost }: State): State => ({
  selectedPost,
});

const mapDispatchToProps: DispatchProps = {
  requestSchedulePost,
};

type AllProps = Readonly<State & DispatchProps & Props>;

const initialState = {
  selectedPost: {
    title: '',
    description: '',
  } as Post,
};

class Scheduler extends React.Component<AllProps> {
  state = initialState;

  constructor(props: AllProps) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ ...nextProps.selectedPost });
  }

  onTitleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      selectedPost: {
        ...this.state.selectedPost,
        title: event.currentTarget.value,
      },
    });
  }

  onDescriptionChange(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    this.setState({
      selectedPost: {
        ...this.state.selectedPost,
        description: event.currentTarget.value,
      },
    });
  }

  close() {
    this.setState(initialState);
    this.props.history.replace('/');
  }

  render() {
    const { selectedPost: { title = '', description = '' } } = this.state;

    return (
      <div className="scheduler container">
        <h2>Scheduler a post</h2>
        <section>
          <div className="form-fields">
            <FormGroup
              field="title"
              label="Title"
              value={title}
              onChange={this.onTitleChange}
            />

            <FormGroup
              field="description"
              label="Description"
              value={description}
              onChange={this.onDescriptionChange}
            >
              <textarea rows={10} />
            </FormGroup>
          </div>
          <div className="form-buttons">
            <button onClick={this.close}>Cancel</button>
            {' '}
            <button>Save</button>
          </div>
        </section>
      </div>
    );
  }
}

export default connect<State, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(Scheduler);
