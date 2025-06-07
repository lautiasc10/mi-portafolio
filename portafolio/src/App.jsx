import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./components/AboutMe/AboutMe"
import Projects from "./components/Projects/Projects"
import Certificates from "./components/Certificates/Certificates"
import Footer from "./components/Footer/Footer"
function App() {
  return (
        <>
        <NavBar/>
        <main className="max-w-screen-xl  mx-auto">
        <AboutMe/>
        <Projects />
        <Certificates />
        </main>
        <footer>
        <Footer />
        </footer>
        </>

  )
}

export default App



