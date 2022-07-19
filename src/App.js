import logo from "./logo.svg";
import "./App.css";
import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemCount from "../src/components/itemList/ItemCount";
import ItemDetailContainer from "./components/itemList/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
