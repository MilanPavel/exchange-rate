import React from 'react';
import { Input, Label } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const InputAmount = props => (
  <Input
    labelPosition='right'
    type='text'
    pattern='[0-9]{0,5}'
    placeholder='Amount'
    onChange={props.handler}
    disabled={props.disabled}
    value={props.value}
  >
    <Label basic>{props.currency}</Label>
    <input />
  </Input>
);

export default InputAmount;
