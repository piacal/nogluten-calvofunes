import logo from "./logo.svg";
import "./App.css";
import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemCount from "../src/components/itemList/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <ItemCount stock={3} initial={0} />
      <ItemListContainer />
    </>
  );
}

export default App;
