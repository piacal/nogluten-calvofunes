import "./App.css";
//import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "../src/components/Containers/ItemListContainer/ItemListContainer";
import ItemCount from "../src/components/ItemCount/ItemCount";
import ItemDetailContainer from "../src/components/Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarNew from "./components/NavBar/NavBarNew";
import CartProvider from "./components/contexts/CartContext";
import Cart from "./components/Cart/Cart";
import Formulario from "./components/formulario";

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
          <Route path="/formulario" element={<Formulario />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
