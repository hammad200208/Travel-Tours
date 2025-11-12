import Hero from "../../components/Hero-Section/Hero.jsx";
import Destination from '../../components/Destinations-Section/Destination.jsx';
import Feature from '../../components/Featured-Section/Feature.jsx';
import Choose from '../../components/Choose-Section/Choose.jsx';
import Review from '../../components/Review-Section/Review.jsx';
import Adventure from '../../components/Adventure-Section/Adventure.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <Destination />
      <Feature />
      <Choose />
      <Review />
      <Adventure />
    </>
  );
};

export default Home;
