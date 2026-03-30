import { Suspense, useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const productsPromise = fetch("/data/tools.json").then((res) => res.json());

const Shop = ({ cart = [], addToCart, removeFromCart, checkout }) => {
  const [tab, setTab] = useState("products");

  return (
    <section id="products">
      <div className="container">
        <h2 className="section-title">Premium digital tools</h2>
        <p className="section-description">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>

        <div className=" flex justify-center gap-1 mb-8 mt-6">
          <button
            onClick={() => setTab("products")}
            className={`btn ${tab === "products" ? "btn-primary" : "btn-default"}`}
          >
            Products
          </button>
          <button
            onClick={() => setTab("cart")}
            className={`btn ${tab === "cart" ? "btn-primary" : "btn-default"}`}
          >
            Cart ({cart?.length})
          </button>
        </div>

        {tab === "products" ? (
          <Suspense
            fallback={
              <div className="w-full py-10 flex items-center justify-center">
                <span className="loading loading-ring loading-lg"></span>
              </div>
            }
          >
            <Products
              productsPromise={productsPromise}
              cart={cart}
              addToCart={addToCart}
            />
          </Suspense>
        ) : (
          <Suspense
            fallback={
              <div className="w-full py-10 flex items-center justify-center">
                <span className="loading loading-ring loading-lg"></span>
              </div>
            }
          >
            <Cart
              productsPromise={productsPromise}
              removeFromCart={removeFromCart}
              cart={cart}
              checkout={checkout}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
};
export default Shop;
