import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const TopHeader = () => (
  <Header as='h2' icon textAlign='center'>
    <Icon name='exchange' />
    Currency Exchange Rates App
    <Header.Subheader>Easily convert foreign currencies.</Header.Subheader>
  </Header>
);

export default TopHeader;
