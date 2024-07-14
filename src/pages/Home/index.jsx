import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { department, states } from '../../utils/selectList'
import Select from 'react-select'
import DateSelect from '../../components/DateSelect'
import { Modale } from '../../components/Modale'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../redux/redux'

export function Home() {
  const dispatch = useDispatch()
  const [birthDate, setBirthDate] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [departmentValue, setDepartmentValue] = useState(null)
  const [stateValue, setStateValue] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    for (const key in formProps) {
      if (formProps[key] === 'undefined' || formProps[key] === '') {
        setError(true)
        return
      }
    }
    setShowModal(true)
    setError(false)
    setBirthDate(null)
    setStartDate(null)
    setDepartmentValue(null)
    setStateValue(null)
    setShowForm(false)
    setTimeout(() => setShowForm(true), 0)
    dispatch(addEmployee(formProps))
  }
  const handleCloseModal = () => setShowModal(false)
  const handleChangeDepartment = (opt) => setDepartmentValue(opt.value)
  const handleChangeState = (opt) => setStateValue(opt.value)

  return (
    <div className="container d-flex flex-column align-items-center mb-5">
      <Link className="btn btn-outline-success btn-sm" to="/employe">
        View Current Employees
      </Link>
      <h2 className="fs-3 mt-3">Create Employee</h2>

      {error && (
        <div className="alert alert-danger p-2" role="alert">
          Veuillez remplir tous les champs du formulaire.
        </div>
      )}

      {showForm && (
        <form
          data-testid="create-employee-form"
          id="create-employee"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              data-testid="first-name"
              className="form-control"
              type="text"
              id="first-name"
              name="firstname"
              required
            />

            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              data-testid="last-name"
              type="text"
              id="last-name"
              name="lastname"
              required
            />

            <label htmlFor="birthDate" className="form-label">
              Date of Birth
            </label>
            <DateSelect setValue={setBirthDate} value={birthDate} />
            <input
              id="birthDate"
              name="birthDate"
              data-testid="birthDate"
              aria-label="Date of Birth"
              type="hidden"
              value={birthDate ? birthDate.format('DD/MM/YYYY') : 'undefined'}
              required
            />

            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <DateSelect setValue={setStartDate} value={startDate} />
            <input
              id="startDate"
              name="startDate"
              data-testid="startDate"
              aria-label="Start Date"
              type="hidden"
              value={startDate ? startDate.format('DD/MM/YYYY') : ''}
              required
            />
          </div>

          <fieldset className="address form-control pb-3 mt-4">
            <legend>Address</legend>

            <label htmlFor="street" className="form-label">
              Street
            </label>
            <input
              id="street"
              data-testid="street"
              type="text"
              className="form-control"
              name="street"
              required
            />

            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              id="city"
              data-testid="city"
              type="text"
              className="form-control"
              name="city"
              required
            />

            <label htmlFor="states" className="form-label">
              State
            </label>
            <Select options={states} onChange={handleChangeState} />
            <input
              id="states"
              data-testid="states"
              name="states"
              type="hidden"
              aria-label="State"
              value={stateValue ? stateValue : 'undefined'}
              required
            />

            <label htmlFor="zip-code" className="form-label">
              Zip Code
            </label>
            <input
              id="zip-code"
              data-testid="zip-code"
              type="number"
              className="form-control"
              name="zipcode"
              required
            />
          </fieldset>

          <label htmlFor="department" className="form-label">
            Department
          </label>
          <Select options={department} onChange={handleChangeDepartment} />
          <input
            id="department"
            data-testid="department"
            name="department"
            type="hidden"
            aria-label="Department"
            value={departmentValue ? departmentValue : 'undefined'}
            required
          />
          <div className="text-center mt-4">
            <button className="btn btn-primary" type="submit" name="submit">
              submit
            </button>
          </div>
        </form>
      )}
      <Modale show={showModal} onClose={handleCloseModal} />
    </div>
  )
}
