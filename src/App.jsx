import './App.css'
import Navbar from './components/reusable/Navbar'
import Hero from './components/Hero-Section/Hero.jsx'
import Destination from './components/Destinations-Section/Destination.jsx'
import Feature from './components/Featured-Section/Feature.jsx'
import Choose from './components/Choose-Section/Choose.jsx'
import Review from './components/Review-Section/Review.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <Feature />
      <Choose />
      <Review />
    </>
  )
}

export default App
