import { NavLink } from 'react-router-dom';

// className="flex sm:flex-column md:flex-row align-center justify-evenly"

export default function Nav() {

  return (
    <nav className="bg-gray-800 text-white p-3 flex flex-row justify-between">
    
      <div>
        <p>Ramita's Portfolio</p>
      </div>
      
      <div id="menu">
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/About">About</NavLink>
        <NavLink activeClassName="active" to="/Portfolio">Portfolio</NavLink>
        <NavLink activeClassName="active" to="/Resume">Resume</NavLink>
      </div>
            
    </nav>
  );
};