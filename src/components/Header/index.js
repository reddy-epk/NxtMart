import {Link, withRouter, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {CiLogout} from 'react-icons/ci'
import './index.css'

const Header = () => {
  const history = useHistory()
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div>
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dqfqwre2q/image/upload/v1713680287/Logo_2_ty0ilv.png"
              alt="website logo"
            />
          </Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="another-radium">
              Cart
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="logic buttonsy reddy"
              onClick={onClickLogout}
            >
              <CiLogout className="sizer" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
