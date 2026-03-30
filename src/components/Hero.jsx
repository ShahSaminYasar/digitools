import { PlayIcon } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section style={{ paddingTop: "40px" }}>
      <div className="container flex flex-col-reverse md:flex-row gap-10 items-center justify-center">
        <div className="flex flex-col gap-7">
          <div className="badge -mb-4">
            <div className="indicator animate-pulse"></div>
            New: AI-Powered Tools Available
          </div>
          <h3 className="text-6xl md:text-7xl font-bold text-neutral leading-18 md:leading-20">
            Supercharge your digital workflow
          </h3>
          <p className="tracking-wider leading-6 block max-w-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-3">
            <a href="#products" className="btn btn-primary">
              Explore Products
            </a>

            <a href="#" className="btn btn-outline">
              <PlayIcon weight="fill" /> Watch Demo
            </a>
          </div>
        </div>

        <img
          src={"/assets/banner.png"}
          alt="Hero banner"
          className="w-full max-w-sm mx-auto md:max-w-lg"
        />
      </div>
    </section>
  );
};
export default Hero;
