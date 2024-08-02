import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Cursor from "./pages/Cursor";
import FavoriteFruits from "./pages/FavoriteFruits";
import FruitShop from "./pages/FruitShop";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <FavoriteFruits />
      <FruitShop />
      <About />
      <Footer />
      <Cursor />
    </>
  );
}

export default App;
