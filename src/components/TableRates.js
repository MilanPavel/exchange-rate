import React from 'react';
import { Segment, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const TableRates = props => (
  <Segment>
    <Table>
      <Table.Header>
        <Table.Row>
          {props.header.map(element => (
            <Table.HeaderCell key={element.toString()}>
              {element}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.data.map(element => (
          <Table.Row key={element['code'].toString()}>
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
