import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Scorecard from "./pages/Scorecard";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Rules' element={<Rules/>} />
      <Route path='/Scorecard' element={<Scorecard/>} />
    </Routes>    
  );
}

export default App;
