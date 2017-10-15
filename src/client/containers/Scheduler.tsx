import { Post, State } from 'common';
import { History } from 'history';
import * as moment from 'moment';
import * as React from 'react';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';

import {
  requestSchedulePost,
  SchedulePostRequestAction,
} from '../actions';

import FormGroup from '../components/FormGroup';

moment.locale('fr');

interface Props {
  title?: string;
  description?: string;
  date?: number;
  history: History;
}

interface InternalState {
  title?: string;
  description?: string;
  date: moment.Moment;
  focused: boolean;
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

const initialState: InternalState = {
  title: '',
  description: '',
  date: moment().add(1, 'day'),
  focused: false,
};

class Scheduler extends React.Component<AllProps, InternalState> {
  state = initialState;

  constructor(props: AllProps) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({
      title: nextProps.title,
      description: nextProps.description,
    });
  }

  onTitleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ title: event.currentTarget.value });
  }

  onDescriptionChange(event: React.SyntheticEvent<HTMLTextAreaElement>) {
    this.setState({ description: event.currentTarget.value });
  }

  close() {
    this.setState(initialState);
    this.props.history.push('/');
  }

  render() {
    const { title = '', description = '' } = this.state;

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

            <div>
              <SingleDatePicker
                id="date-picker-de-ouf"
                date={this.state.date}
                onDateChange={date => this.setState({ date: date || initialState.date })}
                focused={this.state.focused}
                onFocusChange={({ focused }) => this.setState({ focused: focused || false })}
              />
            </div>
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
