import { useState } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { department, states } from '../../utils/selectList'
import Select from 'react-select'
import DateSelect from '../../components/DateSelect'
import { Modale } from '../../components/Modale'

export function Home() {
  const [birthDate, setBirthDate] = useState(dayjs(''))
  const [startDate, setStartDate] = useState(dayjs(''))
  const [departmentValue, setDepartmentValue] = useState('')
  const [stateValue, setStateValue] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    console.log(formProps)
    setShowModal(true)
  }
  const handleCloseModal = () => setShowModal(false)
  const handleChangeDepartment = (opt) => setDepartmentValue(opt.value)
  const handleChangeState = (opt) => setStateValue(opt.value)

  return (
    <div className="container d-flex flex-column align-items-center">
      <Link className="btn btn-outline-success btn-sm" to="/employe">
        View Current Employees
      </Link>
      <h2 className="fs-3 mt-3">Create Employee</h2>

      <form id="create-employee" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
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
            type="text"
            id="last-name"
            name="lastname"
            required
          />

          <label htmlFor="date-of-birth" className="form-label">
            Date of Birth
          </label>
          <DateSelect setValue={setBirthDate} name="ddd" />
          <input
            id="birthDate"
            name="birthDate"
            type="hidden"
            value={birthDate.format('DD-MM-YYYY')}
            required
          />

          <label htmlFor="start-date" className="form-label">
            Start Date
          </label>
          <DateSelect setValue={setStartDate} />
          <input
            id="startDate"
            name="startDate"
            type="hidden"
            value={startDate.format('DD-MM-YYYY')}
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
            type="text"
            className="form-control"
            name="city"
            required
          />

          <label htmlFor="state" className="form-label">
            State
          </label>
          <Select options={states} onChange={handleChangeState} />
          <input
            id="states"
            name="states"
            type="hidden"
            value={stateValue}
            required
          />

          <label htmlFor="zip-code" className="form-label">
            Zip Code
          </label>
          <input
            id="zip-code"
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
          name="department"
          type="hidden"
          value={departmentValue}
          required
        />
        <div className="text-center mt-4">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
      <Modale show={showModal} onClose={handleCloseModal} />
    </div>
  )
}
