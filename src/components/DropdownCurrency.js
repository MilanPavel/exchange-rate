import React from 'react';
import { Dropdown, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const options = [
  {
    key: 1,
    text: 'Mobile',
    value: 1,
    content: (
      <Header icon='mobile' content='Mobile' subheader='The smallest size' />
    )
  },
  {
    key: 2,
    text: 'Tablet',
    value: 2,
    content: (
      <Header
        icon='tablet'
        content='Tablet'
        subheader='The size in the middle'
      />
    )
  },
  {
    key: 3,
    text: 'Desktop',
    value: 3,
    content: (
      <Header icon='desktop' content='Desktop' subheader='The largest size' />
    )
  }
];

const DropdownCurrency = () => (
  <Dropdown selection options={options} placeholder='Choose currency' />
);

export default DropdownCurrency;
