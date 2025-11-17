import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/reusable/Navbar';
import Footer from './components/reusable/Footer';

// Pages
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Destinations from './pages/Destination/Destination.jsx';
import Packages from './pages/Packages/Packages.jsx';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
