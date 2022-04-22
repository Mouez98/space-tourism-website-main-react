import {Routes, Route} from 'react-router-dom'

import Home from "./pages/Home";
import Crew from './pages/Crew'
import Technolgy from './pages/Technolgy'
import Destination from './pages/Destination'

import "./App.css";


function App() {
  return (
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/destinations' element={<Destination />} />
       <Route path='/crew' element={<Crew />} />
       <Route path='/technology' element={<Technolgy />} />
    </Routes>
      
  );
}

export default App;
