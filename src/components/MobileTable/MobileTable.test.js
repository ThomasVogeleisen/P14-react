/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MobileTable } from './index' // Ajustez le chemin d'importation selon votre structure de projet

describe('MobileTable', () => {
  const columns = [
    { name: 'First Name' },
    { name: 'Last Name' },
    // Ajoutez d'autres colonnes selon vos besoins
  ]

  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      startDate: '2020-01-01',
      department: 'IT',
      dateOfBirth: '1990-01-01',
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
    // Ajoutez d'autres lignes de données selon vos besoins
  ]

  test('renders table headers based on columns prop', () => {
    render(<MobileTable columns={columns} data={data} />)
    columns.forEach((column) => {
      expect(
        screen.getByRole('columnheader', { name: column.name }),
      ).toBeInTheDocument()
    })
  })

  test('renders table rows based on data prop', () => {
    render(<MobileTable columns={columns} data={data} />)
    data.forEach((item) => {
      expect(screen.getByText(item.firstName)).toBeInTheDocument()
      expect(screen.getByText(item.lastName)).toBeInTheDocument()
      // Vérifiez d'autres champs selon vos besoins
    })
  })

  test('handles empty data list', () => {
    render(<MobileTable columns={columns} data={[]} />)
    // Assurez-vous qu'aucune ligne de données n'est rendue
    expect(screen.queryByText(data[0].firstName)).not.toBeInTheDocument()
  })
})
