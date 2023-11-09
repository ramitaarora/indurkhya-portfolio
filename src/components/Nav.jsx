import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="flex flex-row justify-between bg-gray-800 text-white p-3">
    
    <div>
      <p>Web Development Portfolio</p>
    </div>
    
    <div className="w-96 flex flex-row align-center justify-evenly">
      <Link className="cursor-pointer" to="/">Home</Link>
      <Link className="cursor-pointer" to="/About">About</Link>
      <Link className="cursor-pointer" to="/Portfolio">Portfolio</Link>
      <Link className="cursor-pointer" to="/Contact">Contact</Link>
    </div>
            
    </div>
  );
};