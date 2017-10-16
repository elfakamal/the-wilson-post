import { Post, State } from 'common';
import { History } from 'history';
import * as moment from 'moment';
import 'moment/locale/fr';
import * as React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
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
    // const fields = ['_blank', '_headerFormat', '_todayLabel', '_weekdays', '_weekStartsOn'];
    // const rawLocale = moment.localeData('fr');
    // const locale = Object.keys(rawLocale).reduce((acc: InfiniteCalendarLocale, key: string) => {
    //   return acc;
    // }, {} as InfiniteCalendarLocale);

    const { title = '', description = '' } = this.state;

    return (
      <div className="scheduler post-content container">
        <h3>Planifier un article</h3>
        <section className="form">
          <div className="form-fields">
            <FormGroup
              field="title"
              label="Titre"
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

            <FormGroup field="date" label="Date">
              <InfiniteCalendar
                height={400}
                width="100%"
                minDate={moment(initialState.date).toDate()}
                locale={{
                  // tslint:disable-next-line:no-require-imports
                  locale: require('date-fns/locale/fr'),
                  headerFormat: 'dddd, D MMMM',
                  weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
                  blank: 'Aucune date selectionnée',
                  todayLabel: {
                    long: 'Aujourd\'hui',
                    short: 'Auj.',
                  },
                  weekStartsOn: 1,
                }}
                theme={{
                  selectionColor: '#fbe300',
                  textColor: {
                    default: '#333',
                    active: '#333',
                  },
                  weekdayColor: '#fbe300',
                  headerColor: '#efd804',
                  floatingNav: {
                    background: '#efd804',
                    color: '#444',
                    chevron: '#444',
                  },
                }}
              />
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
