import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/reusable/Navbar';
import Footer from './components/reusable/Footer';

// Pages
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Destinations from './pages/Destination/Destination.jsx';
import DestinationExplore from './pages/Destination-Explore/DestinationExplore.jsx'
import Safari from './pages/Desert-Safari/Safari.jsx';
import SafariTickets from './pages/Safari-Tickets/SafariTickets.jsx';
import Packages from './pages/Packages/Packages.jsx';
import Services from './pages/Services/Services.jsx';
import Contact from './pages/Contact/Contact.jsx';
import BookNow from './pages/Booking/Booking.jsx';
import Confrim from './pages/Booking/Confirm.jsx';
import { Tickets } from 'lucide-react';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination-explore" element={<DestinationExplore />} />
        <Route path="/desert-safari" element={<Safari />} />
        <Route path="/safari-tickets" element={<SafariTickets />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookNow />} />
        <Route path="/confirm" element={<Confrim />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
