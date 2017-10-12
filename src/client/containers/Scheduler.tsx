import { Post, State } from 'common';
import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';

import { History } from 'history';

import {
  requestSchedulePost,
  SchedulePostRequestAction,
} from '../actions';

import FormGroup from '../components/FormGroup';

moment.locale('fr');

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
    this.props.history.push('/');
  }

  render() {
    const { selectedPost: { title = '', description = '' } } = this.state;

    return (
      <div className="scheduler post-content container">
        <h3>Schedule a post</h3>
        <section className="form">
          <div className="form-fields">
            <FormGroup
              field="title"
              label="Title"
              value={title}
              onChange={this.onTitleChange}
              style={{ height: 40, lineHeight: 40 }}
            />

            <FormGroup
              field="description"
              label="Description"
              value={description}
              onChange={this.onDescriptionChange}
            >
              <textarea rows={5} />
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
