import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import FrontPage from './components/FrontPage.js'
import About from './components/About/About.js'; 
import Services from './components/Services/Services.js';
import Appointment from './components/Appointment/Appointment.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <FrontPage/>
      <About/>
      <Services/>
      <Appointment/>
    </div>
  );
}


export default App;
