import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <h2>🥗 FoodFacts</h2>
      <NavLink to="/">Search</NavLink>
      <NavLink to="/saved">Saved</NavLink>
    </nav>
  )
}

export default NavBar