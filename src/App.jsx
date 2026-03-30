import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Shop from "./components/Shop";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  // Functions
  const addToCart = (id) => {
    if (cart?.includes(id)) {
      return alert("Already added");
    }
    setCart((prev) => [...prev, id]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item !== id));
    return alert("Removed from cart");
  };

  const checkout = () => {
    setCart([]);
    return alert("Checked out!");
  };

  return (
    <>
      <Header cart={cart} />
      <main>
        <Hero />
        <Stats />
        <Shop
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          checkout={checkout}
        />
      </main>
      <Footer />
    </>
  );
}
