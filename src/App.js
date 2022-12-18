import './index.css';
import Navbar from './Components/Navbar'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Description from './Components/Description'
import Projects from './Components/Projects'


function App() {
  return (
    <div className>
      <Navbar/>
      <Header/>
      <Description/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;