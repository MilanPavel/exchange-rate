import React from 'react';
import { Flag, Segment, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const countries = [
  { name: 'Afghanistan', countryCode: 'af' },
  { name: 'Aland Islands', countryCode: 'ax' },
  { name: 'Albania', countryCode: 'al' },
  { name: 'Algeria', countryCode: 'dz' },
  { name: 'American Samoa', countryCode: 'as' },
  { name: 'Andorra', countryCode: 'ad' },
  { name: 'Angola', countryCode: 'ao' }
];

const flagRenderer = item => <Flag name={item.countryCode} />;

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
        {props.rates.map(element => (
          <Table.Row>
            {element.split('|').map(item => {
              return <Table.Cell>{item}</Table.Cell>;
            })}
          </Table.Row>
        ))}
        {/* {countries.map(country => (
          <Table.Row key={country.countryCode}>
            <Table.Cell>{flagRenderer(country)}</Table.Cell>
            <Table.Cell>{country.name}</Table.Cell>
            <Table.Cell>{country.countryCode}</Table.Cell>
            <Table.Cell>{country.alias}</Table.Cell>
          </Table.Row>
        ))} */}
      </Table.Body>
    </Table>
  </Segment>
);

export default TableRates;
