import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Shop from "./components/Shop";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState();

  return (
    <>
      <Header cart={cart} />
      <main>
        <Hero />
        <Stats />
        <Shop cart={cart} setCart={setCart} />
      </main>
      <Footer />
    </>
  );
}
