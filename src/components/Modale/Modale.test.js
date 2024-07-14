/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Importation des dépendances nécessaires pour les tests
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Modale } from './index' // Assurez-vous que le chemin d'importation est correct

// Définition des tests pour le composant Modale
// eslint-disable-next-line no-undef
describe('Modale Component', () => {
  // Test pour vérifier si le composant Modale s'affiche correctement lorsque la prop 'show' est true
  test('should display the modal when show is true', () => {
    render(<Modale show={true} onClose={() => {}} />)
    const modalElement = screen.getByRole('dialog')
    expect(modalElement).toHaveClass('bground show-modale')
  })

  // Test pour vérifier si le composant Modale est bien caché lorsque la prop 'show' est false
  test('should hide the modal when show is false', () => {
    render(<Modale show={false} onClose={() => {}} />)
    const modalElement = screen.getByRole('dialog')
    expect(modalElement).toHaveClass('bground hide-modale')
  })

  // Test pour vérifier si le bouton de fermeture fonctionne correctement
  test('should call onClose when the close button is clicked', () => {
    const onCloseMock = jest.fn()
    render(<Modale show={true} onClose={onCloseMock} />)
    const closeButton = screen.getByLabelText('Close')
    fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  // Test pour vérifier si le bouton 'Close' dans le corps du modal appelle également onClose lorsqu'il est cliqué
  test('should call onClose when the modal body close button is clicked', () => {
    const onCloseMock = jest.fn()
    render(<Modale show={true} onClose={onCloseMock} />)
    const closeButton = screen.getByRole('button', { name: 'Close' })
    fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
