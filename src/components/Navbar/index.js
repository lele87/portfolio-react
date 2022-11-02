import { NavLink } from 'react-router-dom'
import './index.scss'

const Navbar = () => {
  return (
    <>
      <div className="navbar--container">
        <div className="hamburger-menu">
          <input id="menu__toggle" className="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li>
              <NavLink className="menu__item" to="/">
                <h3>Home</h3>
              </NavLink>
            </li>
            <li>
              <NavLink className="menu__item" to="/about">
                <h3>About me</h3>
              </NavLink>
            </li>
            <li>
              <NavLink className="menu__item" to="/contact">
                <h3>Contact</h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
