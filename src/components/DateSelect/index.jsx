import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/fr'
import PropTypes from 'prop-types'

/**
 * `DateSelect` est un composant React qui affiche un sélecteur de date.
 * Il permet à l'utilisateur de choisir une date à l'aide d'un calendrier déroulant.
 * Ce composant utilise `DatePicker` de `@mui/x-date-pickers` pour la sélection de la date,
 * et est configuré pour utiliser le français comme langue locale grâce à `AdapterDayjs` et `LocalizationProvider`.
 *
 * @param {Object} props - Les propriétés passées au composant DateSelect.
 * @param {function} props.setValue - La fonction à appeler avec la nouvelle valeur lorsque la date est changée.
 * @param {Date|string|null} props.value - La date actuellement sélectionnée.
 * @returns {JSX.Element}
 */

export default function DateSelect({ setValue, value }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <DatePicker
        sx={{ width: 1 }}
        defaultValue={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  )
}

DateSelect.propTypes = {
  setValue: PropTypes.func,
  value: PropTypes.any,
}
