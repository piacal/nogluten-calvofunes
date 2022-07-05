import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return ( 
    <>
      <ItemListContainer greeting={"ENVIO GRATIS EN COMPRAS MAYORES A $1000"}/>
      <NavBar />
    </>
  );
}

export default App;
