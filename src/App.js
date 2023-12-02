import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Accuiel from './Components/Accuiel';
import ListCategorie from './Components/ListCategorie';
import ListProduits from './Components/ListProduits';
import Stats from './Components/Stats';

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path='accueil' element={<Accuiel /> } >
          <Route path='Stats' element={<Stats/>} />
          <Route path='Categories' element={<ListCategorie />}/>
          <Route path='Produits' element={<ListProduits />}/>
           </Route>
      </Routes>
    </div>
  );
}

export default App;
{/* <Route path='/Categorie' element={<ListCategorie/>} />
 */}