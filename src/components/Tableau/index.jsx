import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { data } from '../../utils/mocksDatas'

export function Tableau() {
  const [filterText, setFilterText] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip',
      selector: (row) => row.zip,
      sortable: true,
    },
  ]

  const handleFilter = (e) => {
    const text = e.target.value
    setFilterText(text)
    setFilteredData(
      data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(text.toLowerCase()),
        ),
      ),
    )
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
        }}
      >
        <input
          type="text"
          placeholder="Filter by any field"
          value={filterText}
          onChange={handleFilter}
          style={{ padding: '5px' }}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        defaultSortFieldId={1}
        highlightOnHover
        pagination
        responsive
        striped
      />
    </div>
  )
}
