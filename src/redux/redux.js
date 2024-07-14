import { configureStore, createSlice } from '@reduxjs/toolkit'
import { intialStateData } from '../utils/mocksDatas'

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [...intialStateData],
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        id: Date.now(),
        firstName: action.payload.firstname,
        lastName: action.payload.lastname,
        startDate: action.payload.startDate,
        department: action.payload.department,
        dateOfBirth: action.payload.birthDate,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.states,
        zip: action.payload.zipcode,
      }
      state.push(newEmployee)
      return state
    },
  },
})

export const { addEmployee } = employeesSlice.actions

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
})
