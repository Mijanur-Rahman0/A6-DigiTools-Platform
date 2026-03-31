import './App.css'
import Hero from './component/Hero/Hero'
import NavBar from './component/NavBar/NavBar'
import Status from './component/Status'
import Steps from './component/Steps'

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

      </main>
    </>
  )
}

export default App
