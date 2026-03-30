import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

const products = [
  {
    id: 1,
    name: "Design Tool Pro",
    description:
      "A powerful design platform for creating stunning graphics and UI layouts.",
    price: 19,
    period: "Mo",
    tag: "popular",
    tagType: "popular",
    features: ["100+ templates", "Drag & drop editor", "Export to PNG & PDF"],
    icon: "/assets/products/design-tool.png",
  },
  {
    id: 2,
    name: "Operations Manager",
    description:
      "Streamline your business operations with automation and analytics.",
    price: 49,
    period: "Mo",
    tag: "best seller",
    tagType: "best seller",
    features: [
      "Workflow automation",
      "Real-time analytics",
      "Team collaboration",
    ],
    icon: "/assets/products/operation.png",
  },
  {
    id: 3,
    name: "Portfolio Builder",
    description:
      "Create professional portfolios to showcase your work effortlessly.",
    price: 29,
    period: "One-Time",
    tag: "new",
    tagType: "new",
    features: ["Custom domains", "Responsive design", "SEO optimization"],
    icon: "/assets/products/portfolio.png",
  },
  {
    id: 4,
    name: "E-Commerce Starter",
    description:
      "Launch your online store with essential tools and integrations.",
    price: 59,
    period: "Mo",
    tag: "popular",
    tagType: "popular",
    features: [
      "Payment gateway integration",
      "Inventory management",
      "Order tracking",
    ],
    icon: "/assets/products/shopping-cart.png",
  },
  {
    id: 5,
    name: "Social Media Suite",
    description:
      "Manage and grow your social media presence from one dashboard.",
    price: 15,
    period: "Mo",
    tag: "best seller",
    tagType: "best seller",
    features: [
      "Post scheduling",
      "Analytics dashboard",
      "Multi-platform support",
    ],
    icon: "/assets/products/social-media.png",
  },
  {
    id: 6,
    name: "AI Writing Assistant",
    description:
      "Generate high-quality content quickly using AI-powered writing tools.",
    price: 99,
    period: "Yr",
    tag: "new",
    tagType: "new",
    features: [
      "Grammar correction",
      "Content generation",
      "Multiple writing tones",
    ],
    icon: "/assets/products/writing_2327400 1.png",
  },
];

const Shop = ({ cart = [], setCart }) => {
  const [tab, setTab] = useState("products");

  return (
    <section>
      <div className="container">
        <h2 className="section-title">Premium digital tools</h2>
        <p className="section-description">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>

        <div className=" flex justify-center gap-1 mb-8">
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

        {tab === "products" ? <Products products={products} /> : <Cart />}
      </div>
    </section>
  );
};
export default Shop;
