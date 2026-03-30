import { use } from "react";

const Products = ({ productsPromise, addToCart, cart }) => {
  const products = use(productsPromise);

  return (
    <div className="w-full grid grid-cols-3 gap-5">
      {products.map((p, pi) => (
        <div
          key={p?.id}
          className="flex flex-col gap-3 p-5 border border-base-300 rounded-xl fade"
          style={{ animationDelay: pi * 80 + "ms" }}
        >
          <div className="aspect-square border border-base-300 rounded-full p-3 w-15 bg-base-100 grid place-content-center">
            <img src={p?.icon} className="w-full" />
          </div>
          <h3 className="text-2xl font-semibold text-neutral">{p?.name}</h3>
          <p>{p?.description}</p>
          <span className="text-2xl font-semibold text-neutral">
            ${p?.price}
            <span className="font-light text-sm opacity-70">/{p?.period}</span>
          </span>
          <div className="flex flex-col gap-1">
            {p?.features?.map((f, fi) => (
              <span key={fi} className="flex items-center gap-2">
                <img src="/assets/tick.png" width={15} /> {f}
              </span>
            ))}
          </div>
          <button
            className="btn btn-primary mt-1"
            onClick={() => addToCart(p?.id)}
          >
            {cart?.includes(p?.id) ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      ))}
    </div>
  );
};
export default Products;
