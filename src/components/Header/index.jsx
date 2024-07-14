import logo from '../../assets/logo.png'

export function Header() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="text-center mt-3">HRnet</h1>
      <img
        src={logo}
        alt="Logo Hrnet"
        className="img-fluid"
        style={{ width: '100px', aspectRatio: '1 / 1' }}
      />
    </div>
  )
}
