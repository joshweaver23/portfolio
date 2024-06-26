import './App.css'
import AboutHeader from './components/AboutHeader'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Links from './components/Links'
import Navigation from './components/Navigation'
import Recommendations from './components/Recommendations'

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutHeader />
      <AboutMe />
      <Experience />
      <Recommendations />
      <Links />
    </div>
  )
}

export default App
