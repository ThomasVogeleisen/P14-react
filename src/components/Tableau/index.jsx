import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { data } from '../../utils/mocksDatas'
import { columns } from '../../utils/columnsTable'

export function Tableau() {
  const [filterText, setFilterText] = useState('')
  const [filteredData, setFilteredData] = useState(data)

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
          placeholder="Search"
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
