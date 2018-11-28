// import React from 'react';
// import { Input } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

// const InputDate = props => (
//   <Input type='date' placeholder='Select Date' value={'11.01.2018'} />
// );

// export default InputDate;
import React from 'react';
import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class InputDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        inline
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputDate;
