import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return ( 
    <>
      <ItemListContainer greeting={"ENVIO GRATIS EN COMPRAS MAYORES A $1000"}/>
      <NavBar />
      <ItemCount stock={3} initial={0}/>
    </>
  );
}

export default App;
