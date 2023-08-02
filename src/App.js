import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Components/pages/Home";
import Sobre from "./Components/pages/Sobre";

import Navbar from './Components/Layout/Navbar';
import Footer from "./Components/Layout/Footer";


function App() {
  return (
    <Router>
          <Navbar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/sobre" element={<Sobre/>}/>
            </Routes>
          <Footer/>
      </Router>

  );
}

export default App;
