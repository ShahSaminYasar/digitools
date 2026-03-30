import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
