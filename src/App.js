import logo from "./logo.svg";
import "./App.css";
//import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemCount from "../src/components/itemList/ItemCount";
import ItemDetailContainer from "./components/itemList/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarNew from "./components/NavBar/NavBarNew";

function App() {
  return (
    <BrowserRouter>
      <NavBarNew />
      <Routes>
        <Route index element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<div>ERROR 404</div>}></Route>
        <Route path="/cart" element={<div>Cart Page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
