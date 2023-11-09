import { Link } from 'react-router-dom';

export default function Nav({header, setHeader}) {
  return (
    <div className="flex flex-row justify-between bg-gray-800 text-white p-3">
    
    <div>
      <p>Web Development Portfolio</p>
    </div>
    
    <div className="w-96 flex flex-row align-center justify-evenly">
      <Link classname="cursor-pointer" to="/">Home</Link>
      <Link classname="cursor-pointer" onClick={() => setHeader('About Ramita')} to="/About">About</Link>
      <Link classname="cursor-pointer" onClick={() => setHeader('Porfolio')} to="/Portfolio">Portfolio</Link>
      <Link classname="cursor-pointer" onClick={() => setHeader('Contact')} to="/Contact">Contact</Link>
    </div>
            
    </div>
  );
};