import React from 'react';
import DatePicker from 'react-datepicker';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = props => {
  return <DatePicker inline selected={props.date1} onChange={props.handler} />;
};

export default Calendar;
