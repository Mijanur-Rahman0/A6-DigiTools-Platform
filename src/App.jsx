import axios from 'axios'
import './App.css'
import Hero from './component/Hero/Hero'
import NavBar from './component/NavBar/NavBar'
import PricingCards from './component/PricingCards/PricingCards'
import Status from './component/Status'
import Steps from './component/Steps'
import FreeTrial from './component/FreeTrial'
import Footer from './component/Footer'

const pricingPromise =axios.get('pricingData.json');


function App() {

  return (
    <>
      <header className='max-w-300 mx-auto'>
        <nav>
          <NavBar></NavBar>
        </nav>
        <Hero></Hero>

      </header>
      <main className='max-w-400 mx-auto'>
        <Status></Status>

        <Steps></Steps>
        <PricingCards pricingPromise={pricingPromise}></PricingCards>

        <FreeTrial></FreeTrial>

        <Footer></Footer>

      </main>
    </>
  )
}

export default App
