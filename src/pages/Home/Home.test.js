/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from '../../redux/redux.js'
import { Home } from './index.jsx'

describe('Home Page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    )
  })
  test('renders correctly', () => {
    expect(screen.getByText(/create employee/i)).toBeInTheDocument()
    expect(screen.getByText(/view current employees/i)).toBeInTheDocument()
    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.getByRole('dialog')).toHaveClass('hide-modale')
  })

  test('shows error when submitting with missing fields', async () => {
    const form = screen.getByTestId('create-employee-form')
    fireEvent.submit(form)
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
    expect(screen.getByRole('dialog')).toHaveClass('hide-modale')
  })

  test('remplir et soumettre le formulaire', async () => {
    const firstNameInput = screen.getByTestId('first-name')
    firstNameInput.value = 'John'
    const lastNameInput = screen.getByTestId('last-name')
    lastNameInput.value = 'Doe'
    const birthDateInput = screen.getByTestId('birthDate')
    birthDateInput.value = '01/01/2000'
    const startDateInput = screen.getByTestId('startDate')
    startDateInput.value = '01/01/2021'
    const streetInput = screen.getByTestId('street')
    streetInput.value = '123 Main St'
    const cityInput = screen.getByTestId('city')
    cityInput.value = 'Springfield'
    const statesInput = screen.getByTestId('states')
    statesInput.value = 'IL'
    const zipCodeInput = screen.getByTestId('zip-code')
    zipCodeInput.value = '62701'
    const departmentInput = screen.getByTestId('department')
    departmentInput.value = 'Engineering'

    const form = screen.getByTestId('create-employee-form')
    fireEvent.submit(form)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveClass('show-modale')
      expect(screen.queryByRole('alert')).toBeNull()
    })
  })
})
