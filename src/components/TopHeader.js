import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const TopHeader = () => (
  <Header as='h2' icon textAlign='center'>
    <Icon name='exchange' />
    Currency Exchange Rates App
    <Header.Subheader>
      Foreign exchange market rates are served from CNB API service, see{' '}
      <a href='https://www.cnb.cz/en/faq/format_of_the_foreign_exchange_market.html'>
        more info here
      </a>
      .
    </Header.Subheader>
  </Header>
);

export default TopHeader;
