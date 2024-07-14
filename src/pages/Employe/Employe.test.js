/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Employe } from './index' // Assurez-vous que le chemin d'importation est correct
import { store } from '../../redux/redux.js' // Assurez-vous que le chemin vers votre store est correct

describe('Employe Page', () => {
  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Employe />
        </BrowserRouter>
      </Provider>,
    )

    // Vérifie que le titre est présent
    expect(screen.getByText('Current Employees')).toBeInTheDocument()

    // Vérifie que le composant Tableau est rendu
    expect(screen.getByTestId('tableau-component')).toBeInTheDocument() // Assurez-vous que le composant Tableau a un attribut `data-testid="tableau-component"`

    // Vérifie que le bouton Home est présent
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  test('navigates to home page on click', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Employe />
        </BrowserRouter>
      </Provider>,
    )

    // Simule un clic sur le bouton Home
    fireEvent.click(screen.getByText('Home'))

    // Vérifie que l'URL a changé. Cette partie peut nécessiter une approche différente selon la configuration de votre test, car `@testing-library/react` ne gère pas les changements d'URL.
    // Vous pourriez avoir besoin de `jest` pour mocker la fonction de navigation ou d'utiliser une bibliothèque comme `react-router-testing-library`.
  })
})
