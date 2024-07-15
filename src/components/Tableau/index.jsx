import React from 'react'
import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { columns } from '../../utils/columnsTable'
import './style.scss'
import { MobileTable } from '../MobileTable'
import { useSelector } from 'react-redux'

/**
 * Genere l'affichage d'un tableau pour contenir les données des employés
 * et permettre une recherche dans le tableau ou de le trier par colonne
 *
 * @returns {JSX.Element}
 */

export function Tableau() {
  const employees = useSelector((state) => state.employees)
  const [filterText, setFilterText] = useState('')
  const [filteredData, setFilteredData] = useState(employees)

  // Fonction pour filtrer les données du tableau
  const handleFilter = (e) => {
    const text = e.target.value
    setFilterText(text)
    setFilteredData(
      employees.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(text.toLowerCase()),
        ),
      ),
    )
  }

  return (
    <div data-testid="tableau-component">
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
      <div className="table-desktop">
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
      <div className="table-mobile">
        <MobileTable columns={columns} data={filteredData} />
      </div>
    </div>
  )
}
