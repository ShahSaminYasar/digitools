const Featured = () => {
  return (
    <section id="featured" className="bg-gradient text-white">
      <div className="container flex flex-col justify-center items-center gap-6">
        <h2
          className="section-title"
          style={{ color: "#fff", margin: 0, marginBottom: "-10px" }}
        >
          Ready to Transform Your Workflow?
        </h2>

        <p
          className="section-description"
          style={{ color: "#e6e6e6", margin: 0 }}
        >
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>

        <div className="flex items-center gap-3 justify-center mt-3">
          <a
            href="#products"
            className="btn hover:scale-105 transition-all duration-150 hover:opacity-100"
          >
            <span className="bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Explore Products
            </span>
          </a>

          <a
            href="#pricing"
            className="btn border-white bg-transparent hover:scale-105 transition-all duration-150 text-white"
          >
            View Pricing
          </a>
        </div>

        <p
          className="section-description"
          style={{ color: "#e6e6e6", margin: 0 }}
        >
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};
export default Featured;
