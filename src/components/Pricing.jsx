const plans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for getting started",
    price: 0,
    period: "monthly",
    tag: "",
    tagType: "",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    id: 2,
    name: "Pro",
    description: "Best for professionals",
    price: 29,
    period: "monthly",
    tag: "Most Popular",
    tagType: "popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For teams and businesses",
    price: 99,
    period: "monthly",
    tag: "",
    tagType: "",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section>
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-description">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 lg:gap-8 mt-12">
          {plans?.map((plan) => (
            <div
              key={plan?.id}
              className={`border-2 p-7 rounded-xl ${plan?.highlighted ? "bg-gradient text-base-100 border-primary" : "bg-base-200 border-base-300"} relative flex flex-col gap-2`}
            >
              {plan?.tag && (
                <span
                  className={`capitalize py-1 px-2 text-sm font-semibold w-fit block rounded-full absolute -top-3 left-1/2 -translate-x-1/2 text-amber-600 bg-amber-100 border-2 border-base-100`}
                >
                  {plan?.tag}
                </span>
              )}

              <h3
                className={`text-2xl font-semibold ${plan?.highlighted ? "text-white" : "text-neutral"}`}
              >
                {plan?.name}
              </h3>

              <p>{plan?.description}</p>

              <span
                className={`text-3xl font-semibold ${plan?.highlighted ? "text-white" : "text-neutral"} block my-2`}
              >
                ${plan?.price}
                <span className="font-light text-base opacity-70">
                  /{plan?.period}
                </span>
              </span>

              <div className="flex flex-col gap-1 text-sm mb-5">
                {plan?.features?.map((f, fi) => (
                  <span key={fi} className="flex items-center gap-2">
                    <img src="/assets/tick.png" width={15} /> {f}
                  </span>
                ))}
              </div>

              <button
                className={`btn ${plan?.highlighted ? "btn-outline" : "btn-primary"} mt-auto`}
              >
                {plan?.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
