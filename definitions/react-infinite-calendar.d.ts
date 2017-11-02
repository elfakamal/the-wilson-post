declare module 'react-infinite-calendar' {
  interface InfiniteCalendarLocale {
    locale?: any;
    blank?: string;
    headerFormat?: string;
    todayLabel?: {
      long?: string;
      short?: string;
    };
    weekdays?: string[];
    months?: string[];
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }

  interface InfiniteCalendarProps {
    autoFocus?: boolean;
    className?: string;
    DayComponent?: (props: any) => JSX.Element;
    disabledDates?: Date[];
    disabledDays?: number[];
    display?: 'years' | 'days';
    displayOptions?: {
      hideYearsOnSelect?: boolean;
      layout?: 'portrait' | 'landscape';
      overscanMonthCount?: number;
      shouldHeaderAnimate?: boolean;
      showHeader?: boolean;
      showMonthsForYears?: boolean;
      showOverlay?: boolean;
      showTodayHelper?: boolean;
      showWeekdays?: boolean;
      todayHelperRowOffset?: number;
    };
    height?: number;
    keyboardSupport?: boolean;
    locale?: InfiniteCalendarLocale;
    max?: Date;
    maxDate?: Date;
    min?: Date;
    minDate?: Date;
    onScroll?: () => void;
    onScrollEnd?: () => void;
    onSelect?: () => void;
    rowHeight?: number;
    tabIndex?: number;
    theme?: {
      floatingNav?: {
        background?: string;
        chevron?: string;
        color?: string;
      };
      headerColor?: string;
      selectionColor?: string | GetColor;
      textColor?: {
        active?: string;
        default?: string;
      };
      todayColor?: string;
      weekdayColor?: string;
    };
    width?: string | number;
    YearsComponent?: (props: any) => JSX.Element;
  }

  type GetColor = () => string;

  export default class InfiniteCalendar extends React.Component<InfiniteCalendarProps, object> {}
}
