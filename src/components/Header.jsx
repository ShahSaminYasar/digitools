import { ListIcon, ShoppingCartIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header({ cart = [] }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="px-3 font-semibold text-sm fixed top-0 shadow-sm bg-base-100 w-full z-50">
        <div className="container flex items-center justify-between gap-3 h-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setNavOpen((prev) => !prev)}
              className="md:hidden cursor-pointer"
            >
              {navOpen ? (
                <XIcon weight="bold" size={25} />
              ) : (
                <ListIcon weight="bold" size={25} />
              )}
            </button>

            <img
              src={"/assets/logo.png"}
              alt="DigiTools"
              className="w-full max-w-38"
            />
          </div>

          <nav
            className={`absolute top-16 left-2 bg-base-300 md:bg-transparent rounded-lg p-3 w-50 shadow-lg ${navOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-3 opacity-0 pointer-events-none"} transition-all duration-300 md:relative md:rounded-none md:shadow-none md:opacity-100 md:pointer-events-auto md:left-0 md:top-0 md:w-auto md:p-0 md:translate-y-0`}
          >
            <ul className="flex flex-col md:flex-row gap-3 md:gap-8">
              <li className="block">
                <a href="#products" className="block">
                  Products
                </a>
              </li>
              <li className="block">
                <a href="#features" className="block">
                  Features
                </a>
              </li>
              <li className="block">
                <a href="#pricing" className="block">
                  Pricing
                </a>
              </li>
              <li className="block">
                <a href="#featured" className="block">
                  Testimonials
                </a>
              </li>
              <li className="block">
                <a href="#featured" className="block">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4 items-center">
            <button className="relative">
              <ShoppingCartIcon size={18} />
              {cart?.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-white bg-red-600 px-1 rounded-sm font-bold text-[10px]">
                  {cart?.length}
                </span>
              )}
            </button>

            <a href="#">Login</a>

            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </header>
      <div className="w-full h-20"></div>
    </>
  );
}
