import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function extractStatesAndCurrencies(data) {
  if (data) {
    return data.map(item => {
      return {
        key: item['code'],
        text: item['state'] + ' (' + item['code'] + ')',
        value: item['code']
      };
    });
  }
}

const DropdownCurrency = props => (
  <Dropdown
    selection
    icon='world'
    className='icon'
    labeled
    button
    options={extractStatesAndCurrencies(props.data)}
    placeholder='Choose currency'
    onChange={props.handler}
  />
);

export default DropdownCurrency;
