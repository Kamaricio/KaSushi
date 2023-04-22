
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { NavBar } from './componentes/NabBar/NavBar';
import { ItemCounter } from './componentes/ItemCounter/ItemCounter';
// import { ItemList } from './componentes/ItemList/ItemList';
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
      {/* <div>
    <NavBar/>
    <ItemCounter/>
    <hr />
    <ItemListContainer nombre="Platos del Mundo"/>
  </div> */}

      <div className='App'>

        <Router>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/contador' element={<ItemCounter/>}/>
            <Route path='*' element={<Navigate to="/" />}/>

          </Routes>

        </Router>
      </div>
    </>
  );
}

export default App;
