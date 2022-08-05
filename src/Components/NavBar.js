import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        className='linkStyles'
        activeStyle={{ background: 'crimson' }}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        exact
        className='linkStyles'
        activeStyle={{ background: 'crimson' }}
      >
        About
      </NavLink>
      <NavLink
        to='/recipes'
        exact
        className='linkStyles'
        activeStyle={{ background: 'crimson' }}
      >
        Recipes
      </NavLink>
      <NavLink
        to='/new'
        exact
        className='linkStyles'
        activeStyle={{ background: 'crimson' }}
      >
        New Recipe
      </NavLink>
    </div>
  );
}
