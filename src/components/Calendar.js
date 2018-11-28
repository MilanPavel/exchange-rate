import React from 'react';
import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startDate: new Date()
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }

//   render() {
//     return (
//       <DatePicker
//         inline
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }

const Calendar = props => {
  return <DatePicker inline selected={props.date1} onChange={props.handler} />;
};

export default Calendar;
