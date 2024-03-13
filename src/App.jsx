import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {

  return (
    <main>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Footer />
    </main>
  );
}

export default App;