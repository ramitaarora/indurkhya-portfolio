import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="min-w-full flex flex-row justify-evenly bg-gray-700 text-white p-3">
            <Link classname="cursor-pointer" to="/">Home</Link>
            <Link classname="cursor-pointer" to="/About">About</Link>
            <Link classname="cursor-pointer" to="/Portfolio">Portfolio</Link>
            <Link classname="cursor-pointer" to="/Contact">Contact</Link>

    </div>
  );
};