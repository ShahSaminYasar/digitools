import { ShoppingCartIcon } from "@phosphor-icons/react";

export default function Header({ cart = [] }) {
  return (
    <>
      <header className="px-3 font-semibold text-sm fixed top-0 shadow-sm bg-base-100 w-full z-50">
        <div className="container flex items-center justify-between gap-3 h-20">
          <img
            src={"/assets/logo.png"}
            alt="DigiTools"
            className="w-full max-w-38"
          />

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
