import { use } from "react";

const Cart = ({ cart = [], removeFromCart, productsPromise, checkout }) => {
  const products = use(productsPromise);
  // const cartedProducts = products?.filter((p) => cart?.includes(p?.id));
  const cartedProducts = cart?.map((item) =>
    products?.find((p) => p?.id === item),
  );
  const cartTotal = cartedProducts?.reduce(
    (total, product) => total + product?.price,
    0,
  );

  return (
    <div className="border border-base-300 rounded-xl p-8 flex flex-col gap-5">
      <h3 className="text-2xl text-neutral font-bold">Your Cart</h3>

      <div className="flex flex-col gap-4 fade">
        {cartedProducts?.length > 0 ? (
          cartedProducts?.map((p) => (
            <div
              key={p?.id}
              className="flex items-center gap-4 bg-base-200 p-5 rounded-lg"
            >
              <div className="aspect-square border border-base-300 rounded-full p-3 w-15 bg-base-100 grid place-content-center">
                <img src={p?.icon} className="w-full" />
              </div>

              <div>
                <h5 className="text-xl font-semibold text-neutral mb-1">
                  {p?.name}
                </h5>
                <span>${p?.price}</span>
              </div>

              <button
                className="text-error font-semibold text-sm block ml-auto cursor-pointer"
                onClick={() => removeFromCart(p?.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <span className="block py-10 text-center text-sm text-neutral font-medium">
            You haven&apos;t added any product to cart yet.
          </span>
        )}
      </div>

      <div className="flex justify-between items-center gap-5">
        <span className="text-secondary font-normal">Total</span>
        <span className="text-xl font-medium text-neutral">${cartTotal}</span>
      </div>

      <button
        className={`btn btn-primary disabled:grayscale disabled:opacity-50`}
        disabled={cartedProducts?.length === 0}
        onClick={() => checkout(cartTotal)}
      >
        Proceed To Checkout
      </button>
    </div>
  );
};
export default Cart;
