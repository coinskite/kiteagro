import Testimonial from './testimonial';
import Technical from './technical';
import Features from './features';
import Benefits from './benefits';
import Address from './address';
import Header from './header';
import Press from './press';

function Home() {
  return (
    <>
      <Header />
      <Features />
      <Benefits />
      <Technical />
      <Testimonial />
      <Press />
      <Address />
    </>
  )
}

export default Home