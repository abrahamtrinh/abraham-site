import './index.css';
import Navbar from './Components/Navbar'
import Example from './Components/Experience'
import Header from './Components/Header'
import Spacer from './Components/Spacer'
import Footer from './Components/Footer'
import Description from './Components/Description';

function App() {
  return (
    <div className>
      <Navbar />
      <Header/>
      <Description/>
      <Example/>
      <Footer/>
    </div>
  );
}

export default App;