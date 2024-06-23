import './style.css'
import { Link } from 'react-router-dom'
import { Tableau } from '../../components/Tableau'

export function Employe() {
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Tableau />
      <Link to="/">Home</Link>
    </div>
  )
}
