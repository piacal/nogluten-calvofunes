import logo from "./logo.svg";
import "./App.css";
//import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemCount from "../src/components/itemList/ItemCount";
import ItemDetailContainer from "./components/itemList/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarNew from "./components/NavBar/NavBarNew";
import CartProvider from "./components/contexts/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBarNew />
        <Routes>
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
