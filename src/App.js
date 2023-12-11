import './App.css';
import Footer from './Footer';
import Login from './Login';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Problems from './Problems';
import Details from './Details';
import Services from './Services';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Details/>}/>
          <Route path="/Footer" element={<Footer />}/>
          <Route path="/Problems" element={<Problems />}/>
          <Route path="/Services" element={<Services />}/>
          <Route path="/Login" element={<Login />}/>
          
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
