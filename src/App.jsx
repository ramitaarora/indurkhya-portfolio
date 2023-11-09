import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [header, setHeader] = useState('')

  return (
    <div>
      <Nav header={header} setHeader={setHeader} />
      <Outlet header={header} setHeader={setHeader} />
      <Footer />
    </div>
  );
}

export default App;