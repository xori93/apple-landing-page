import './App.css'
// import Header from './components/Header'
import LandingSection from './components/LandingSection'
import Navbar from './components/Navbar'
import apple from './assets/apple.png'
import search from './assets/search.png'
import bag from './assets/shopping-bag.png'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar appleLogo={apple} search={search} bag={bag}/>
      {/* <Header /> */}
      <LandingSection appleLogo={apple}/>
      <Footer />
    </>
  )
}

export default App
