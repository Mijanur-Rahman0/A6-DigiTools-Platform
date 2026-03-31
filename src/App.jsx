import './App.css'
import Hero from './component/Hero/Hero'
import NavBar from './component/NavBar/NavBar'
import Status from './component/Status'

function App() {


  return (
    <>
      <header className='max-w-300 mx-auto'>
        <nav>
          <NavBar></NavBar>
        </nav>
        <Hero></Hero>

      </header>
      <main>
        <Status></Status>

      </main>
    </>
  )
}

export default App
