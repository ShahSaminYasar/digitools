const Stats = () => {
  return (
    <section className="bg-gradient text-white">
      <div className="container font-light flex flex-col sm:flex-row justify-evenly items-center text-center">
        <div>
          <span className="text-6xl font-bold block mb-2">50K+</span>
          <span className="text-white/90">Active Users</span>
        </div>

        <div className="divider sm:divider-horizontal"></div>

        <div>
          <span className="text-6xl font-bold block mb-2">200+</span>
          <span className="text-white/90">Premium Tools</span>
        </div>

        <div className="divider sm:divider-horizontal"></div>

        <div>
          <span className="text-6xl font-bold block mb-2">4.9</span>
          <span className="text-white/90">Rating</span>
        </div>
      </div>
    </section>
  );
};
export default Stats;
