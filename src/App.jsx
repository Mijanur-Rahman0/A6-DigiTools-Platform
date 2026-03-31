import './App.css'
import Hero from './component/Hero/Hero'
import NavBar from './component/NavBar/NavBar'

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

      </main>
    </>
  )
}

export default App
