import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Shop from "./components/Shop";
import { useState } from "react";
import { toast } from "react-toastify";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Featured from "./components/Featured";

export default function App() {
  const [cart, setCart] = useState([]);

  // Functions
  const addToCart = (id) => {
    if (cart?.includes(id)) {
      return toast.warning("Already added to cart");
    }
    setCart((prev) => [...prev, id]);
    toast.success("Added to cart!");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item !== id));
    return toast.info("Removed from cart");
  };

  const checkout = (amount = 0) => {
    setCart([]);
    return toast.success("Checkout successful, total paid $" + amount);
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
        <Steps />
        <Pricing />
        <Featured />
      </main>
      <Footer />
    </>
  );
}
