import React from 'react';
import { Segment, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// const flagRenderer = item => <Flag name={item.countryCode} />;

const TableRates = props => (
  <Segment>
    <Table>
      <Table.Header>
        <Table.Row>
          {props.header.map(element => (
            <Table.HeaderCell>{element}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.data.map(element => (
          <Table.Row>
            <Table.Cell>{element['state']}</Table.Cell>
            <Table.Cell>{element['currency']}</Table.Cell>
            <Table.Cell>{element['amount']}</Table.Cell>
            <Table.Cell>{element['code']}</Table.Cell>
            <Table.Cell>{element['rate']}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Segment>
);

export default TableRates;
