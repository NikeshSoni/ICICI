import './SCSS/App.scss';
import React from 'react';
import Home from './pages/home';

import { Routes , Route } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
        
        <Routes>
                <Route index path="/" element= {<Home  />} />
                {/* <Route  path="/About" element= {<About />} />
                <Route  path="/Support" element= {<Soni />} />
                <Route  path="/More" element= {<More />} /> */}
       </Routes>
     
    </div>
  );
}

export default App;
