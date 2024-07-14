/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react' // Importer screen et fireEvent
import { Provider } from 'react-redux'
import { store } from '../../redux/redux.js'
import { Tableau } from './index.jsx'

// Fonction utilitaire pour rendre le composant avec le contexte du store Redux
const renderWithRedux = (component) => {
  return render(<Provider store={store}>{component}</Provider>)
}

describe('Tableau Component', () => {
  it('renders correctly', () => {
    const { container } = renderWithRedux(<Tableau />)
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
    expect(container.querySelector('.table-desktop')).toBeInTheDocument()
    expect(container.querySelector('.table-mobile')).toBeInTheDocument()
  })

  it('filters data based on search input', () => {
    renderWithRedux(<Tableau />)
    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'test' },
    })
    // Assurez-vous d'avoir des données de test ou un mock du store Redux pour vérifier le filtrage
    // Exemple : expect(screen.getByText('Donnée filtrée')).toBeInTheDocument();
  })

  // Ajoutez d'autres tests au besoin, par exemple pour vérifier le tri ou la pagination
})
