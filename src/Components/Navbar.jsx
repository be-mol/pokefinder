import {NavLink} from 'react-router-dom'

function NavBar() {
    const setActive = ({isActive}) => isActive ? 'active' : 'inActive'
  return (
    <nav className="navbar">
            <NavLink className={ setActive } to="/"> Home </NavLink> | <NavLink className={ setActive } to="/pokemon"> Pokémon </NavLink>
    </nav>
  )
}

export default NavBar