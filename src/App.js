import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Statistic } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import TopHeader from './components/TopHeader';
import InputAmount from './components/InputAmount';
import DropdownCurrency from './components/DropdownCurrency';
import TableRates from './components/TableRates';
import InputDate from './components/InputDate';

import { convertDataToModel } from './utils/parsingHelpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: {},
      header: [], // extracted data for displaying header in table
      model: [], // converted raw data into array of objects
      inputCZK: '1',
      inputOther: '0',
      selectedCurrency: '-----',
      currentObject: undefined
    };

    this.handlerInputCZK = this.handlerInputCZK.bind(this);
    this.handlerDroplist = this.handlerDroplist.bind(this);
    this.calculateConversion = this.calculateConversion.bind(this);
  }

  calculateConversion() {
    const { inputCZK, currentObject, selectedCurrency } = this.state;

    if (
      selectedCurrency !== '-----' &&
      inputCZK &&
      currentObject &&
      currentObject
    ) {
      return (inputCZK / currentObject.rate) * currentObject.amount;
    }
  }

  handlerInputCZK(e) {
    e.preventDefault();
    this.setState({
      // allow to enter only digits
      inputCZK: e.target.value.replace(/\D/, '')
    });
  }

  handlerDroplist(e, data) {
    e.preventDefault();
    if (this.state.model) {
      let item = this.state.model.filter(item => {
        return item['code'] === data.value;
      });
      this.setState({ currentObject: item[0] });
    }
    this.setState({
      selectedCurrency: data.value
    });
  }

  componentDidMount() {
    axios.get(`/api/daily_rates`).then(res => {
      // first split the string into list of arrays
      let arr = res.data.split('\n');

      // parse date which is the first element in array
      let regex = /(\d{2})\.[a-zA-Z]{3}(\s{1})(\d{4})/;
      this.setState({ date: new Date(arr[0].match(regex)[0]) });

      // store the table header (second element in array)
      this.setState({ header: arr[1].split('|') });

      // store the data (exchange rates)
      arr.shift(); // remove timestamp
      arr.shift(); // remove header
      this.setState({ model: convertDataToModel(arr) });
    });
  }

  render() {
    const { inputCZK, model, currentObject } = this.state;

    return (
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <TopHeader />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} style={{ background: '#eee' }}>
          <Grid.Column textAlign='center'>
            <InputAmount
              currency='CZK'
              value={inputCZK}
              handler={this.handlerInputCZK}
            />
            <br />
            <br />
            <InputAmount
              currency={this.state.selectedCurrency}
              disabled={true}
              value={this.calculateConversion()}
            />

            <br />
            <br />
            <DropdownCurrency data={model} handler={this.handlerDroplist} />
            <br />
            <br />
            <InputDate date='11.01.2018' />
          </Grid.Column>
        </Grid.Row>

        {currentObject ? (
          <Grid.Row columns={1} textAlign='center'>
            <Grid.Column textAlign='center'>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value>{currentObject.amount}</Statistic.Value>
                  <Statistic.Label>{currentObject.code}</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>=</Statistic.Value>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{currentObject.rate}</Statistic.Value>
                  <Statistic.Label>CZK</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Grid.Column>
          </Grid.Row>
        ) : null}

        <Grid.Row columns={1}>
          <Grid.Column textAlign='center'>
            <TableRates header={this.state.header} data={this.state.model} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
