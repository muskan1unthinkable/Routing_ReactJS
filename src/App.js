
import './App.css';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';
import Tour from './components/Tour';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <nav>
       
        <li><Link to="/"> Home</Link></li>
      <li><Link to="/info">Info</Link></li>
      <li><Link to="/contact">Contact </Link></li>
      <li><Link to="/tour">Tour</Link></li>
        
      </nav>
      <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/tour" element={<Tour/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
