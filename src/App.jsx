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
import Morning from './pages/morning-desert-safari/Morning.jsx';
import Evening from './pages/evening-desert-safari/Evening.jsx';
import Night from './pages/night-desert-safari/Night.jsx';
import BookingForm from './pages/night-desert-safari/BookingForm.jsx';
import BookingConfirm from './pages/night-desert-safari/BookingConfirm.jsx';
import Cruise from './pages/Cruise/Cruise.jsx'
import Standard from './pages/standard-cruise/Standard.jsx';
import Premium from './pages/premium-cruise/Premium.jsx';
import Private from './pages/private-cruise/Private.jsx';
import Packages from './pages/Packages/Packages.jsx';
import PackagesDetail from './pages/packages-detail/PackagesDetail.jsx';
import Services from './pages/Services/Services.jsx';
import DubaiTransfer from './pages/dubai-transfers/DubaiTransfer.jsx';
import Contact from './pages/Contact/Contact.jsx';
import BookNow from './pages/Booking/Booking.jsx';
import Confrim from './pages/Booking/Confirm.jsx';



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
        <Route path="/morning-desert-safari" element={<Morning />} />
        <Route path="/evening-desert-safari" element={<Evening />} />
        <Route path="/night-desert-safari" element={<Night />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/booking-confirm" element={<BookingConfirm />} />
        <Route path="/cruise" element={<Cruise />} />
        <Route path="/standard-cruise" element={<Standard />} />
        <Route path="/premium-cruise" element={<Premium />} />
        <Route path="/private-cruise" element={<Private />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages-detail" element={<PackagesDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dubai-transfers" element={<DubaiTransfer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookNow />} />
        <Route path="/confirm" element={<Confrim />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
