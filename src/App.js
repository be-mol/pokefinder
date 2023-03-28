import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartaPoke from './Components/CartaPoke';
import Home from './Views/Home';
import PokeBusqueda from './Views/PokeBusqueda';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pokemon' element={<PokeBusqueda/>} />
          <Route path='/pokemon/:id' element={<CartaPoke/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
