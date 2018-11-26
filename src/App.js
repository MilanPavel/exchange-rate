import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Grid, Header, Icon, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import InputAmount from './components/InputAmount';
import DropdownCurrency from './components/DropdownCurrency';
import TableRates from './components/TableRates';
import InputDate from './components/InputDate';

const TopHeader = () => (
  <Header as='h2' icon textAlign='center'>
    <Icon name='exchange' />
    Currency Exchange Rates App
    <Header.Subheader>Easily convert foreign currencies.</Header.Subheader>
  </Header>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: {},
      header: [],
      dailyRates: []
    };
  }

  componentDidMount() {
    axios.get(`/api/daily_rates`).then(res => {
      console.log(res.data);

      // first split the string into list of arrays
      let arr = res.data.split('\n');

      // parse date which is the first element in array
      let regex = /(\d{2})\.[a-zA-Z]{3}(\s{1})(\d{4})/;
      this.setState({ date: new Date(arr[0].match(regex)[0]) });

      // store the table header (second element in array)
      this.setState({ header: arr[1].split('|') });

      // store the data (exchange rates)
      // TODO: use splice instead
      arr.shift(); // remove timestamp
      arr.shift(); // remove header
      this.setState({ dailyRates: arr }); // pass only data
    });
  }

  render() {
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <TopHeader />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} style={{ background: '#eee' }}>
          <Grid.Column textAlign='center'>
            <InputAmount currency='CZK' />
            <br />
            <br />
            <InputAmount currency='AUD' />
            <br />
            <br />
            <DropdownCurrency />
            <br />
            <br />
            <InputDate date='11.01.2018' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column textAlign='center'>
            <TableRates
              header={this.state.header}
              rates={this.state.dailyRates}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
