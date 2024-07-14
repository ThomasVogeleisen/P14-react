import React from 'react'
import PropTypes from 'prop-types'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

export function MobileTable({ columns, data }) {
  return (
    <Table className="mt-5">
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th key={column.name}>{column.name}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody className="">
        {data.map((item, index) => (
          <Tr className="p-0 mb-3 bg-secondary-subtle" key={index}>
            <Td key={item.firstName}>{item.firstName}</Td>
            <Td className="bg-light" key={item.lastName}>
              {item.lastName}
            </Td>
            <Td key={item.startDate}>{item.startDate}</Td>
            <Td className="bg-light" key={item.department}>
              {item.department}
            </Td>
            <Td key={item.dateOfBirth}>{item.dateOfBirth}</Td>
            <Td className="bg-light" key={item.street}>
              {item.street}
            </Td>
            <Td key={item.city}>{item.city}</Td>
            <Td className="bg-light" key={item.state}>
              {item.state}
            </Td>
            <Td key={item.zip}>{item.zip}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

MobileTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
