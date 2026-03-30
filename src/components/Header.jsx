import { ShoppingCartIcon } from "@phosphor-icons/react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="px-3 font-semibold text-sm">
      <div className="container flex items-center justify-between gap-3 h-20">
        <img src={logo} alt="DigiTools" className="w-full max-w-38" />

        <nav>
          <ul className="flex gap-8">
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4 items-center">
          <button>
            <ShoppingCartIcon />
          </button>

          <a href="#">Login</a>

          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
