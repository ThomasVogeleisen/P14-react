import { Link } from 'react-router-dom'
import { Tableau } from '../../components/Tableau'

export function Employe() {
  return (
    <div
      id="employee-div"
      className="container d-flex flex-column align-items-center mb-5"
    >
      <h2 className="m-4 fs-3">Current Employees</h2>
      <div className="container-sm">
        <Tableau />
      </div>
      <Link className="btn btn-secondary mt-4" to="/">
        Home
      </Link>
    </div>
  )
}
