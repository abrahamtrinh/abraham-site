import './index.css';
import Navbar from './Components/Navbar'
import Example from './Components/Example'
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
      <Footer/>
    </div>
  );
}

export default App;