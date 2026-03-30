const steps = [
  {
    image: "/assets/user.png",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    image: "/assets/package.png",
    title: "Choose Products",
    description: "Browse our catalog and select the toolsthat fit your needs.",
  },
  {
    image: "/assets/rocket.png",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section id="features" className="bg-base-200">
      <div className="container">
        <h2 className="section-title">Get started in 3 steps</h2>
        <p className="section-description">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="flex flex-row flex-wrap justify-center items-center gap-7 mt-9">
          {steps?.map((step, index) => (
            <div className="w-full max-w-sm mx-auto bg-base-100 p-4 rounded-xl border border-base-300 flex flex-col gap-3 items-center justify-center aspect-square relative text-center">
              <span className="grid w-9 aspect-square place-content-center p-2 absolute top-5 right-5 bg-gradient text-white rounded-full text-sm font-medium">
                {`${index + 1}`.padStart(2, "0")}
              </span>

              <div className="bg-[#f4e8fe] p-2 rounded-full aspect-square w-25 grid place-content-center">
                <img src={step?.image} alt="" />
              </div>

              <h3 className="text-2xl font-bold text-neutral block text-center mt-1">
                {step?.title}
              </h3>

              <p className="text-neutral-500">{step?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Steps;
