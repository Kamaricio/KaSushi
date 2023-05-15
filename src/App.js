
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NabBar/NavBar';
import { ItemCounter } from './componentes/ItemCounter/ItemCounter';
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './componentes/Context/CartContext';
import { CartVisual } from './componentes/CartVisual/CartVisual';
import { Chekout } from './componentes/Chekout/Chekout';

function App() {

  return (
    <CartProvider>
    <>

      <div className='App'>

        <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/carrito' element={<CartVisual/>}/>
            <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/contador' element={<ItemCounter/>}/>
            <Route path='*' element={<Navigate to="/" />}/>
            <Route path='/CheckOut' element={<Chekout/>}/>
          </Routes>

        </Router>
      </div>
    </>
    </CartProvider>
  );
}

export default App;
