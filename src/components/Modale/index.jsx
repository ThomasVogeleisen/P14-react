import './style.css'
import PropTypes from 'prop-types'

export function Modale({ show, onClose }) {
  const showHideClassName = show ? 'bground show-modale' : 'bground hide-modale'
  return (
    <div
      className={showHideClassName}
      role="dialog"
      aria-modal="true"
      aria-label="Employe ajouté avec succès"
    >
      <div className="content">
        <div className="modal-header">
          <h2>Employee Created!</h2>
          <span
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
            aria-hidden="true"
          >
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>You have successfully added a new employee.</p>
          <button type="button" className="modal-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

Modale.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
