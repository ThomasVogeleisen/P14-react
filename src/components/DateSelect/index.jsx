import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/fr'

import PropTypes from 'prop-types'

export default function DateSelect({ setValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <DatePicker
        sx={{ width: 1 }}
        defaultValue={null}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  )
}

DateSelect.propTypes = {
  setValue: PropTypes.func,
}
