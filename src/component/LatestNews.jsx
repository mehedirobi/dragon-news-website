import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-gray-200">
      <p className="bg-secondary px-3 py-2 text-base-100">Latest</p>

      <Marquee className="flex gap-5" pauseOnHover={true} speed={50} gradient={false}>
        <p className="px-3 py-2 font-bold">
          Breaking News: Bangladesh continues to expand its digital
          infrastructure to improve online services across the country.
        </p>

        <p className="px-3 py-2 font-bold">
          Latest Update: New opportunities in technology and software
          development are creating jobs for young professionals.
        </p>

        <p className="px-3 py-2 font-bold">
          {" "}
          Sports: The national cricket team is preparing for its upcoming
          international matches with intensive training sessions.{" "}
        </p>
        <p className="px-3 py-2 font-bold">
          Education: Universities are introducing modern technology-focused
          courses to better prepare students for the job market.{" "}
        </p>
        <p className="px-3 py-2 font-bold">
          Technology: Artificial Intelligence and web development remain among
          the fastest-growing career fields worldwide.
        </p>
        <p className="px-3 py-2 font-bold">
          {" "}
          Business: Local startups are attracting increased investment as the
          digital economy continues to grow. Weather: Seasonal rainfall is
          expected in several regions, bringing relief from recent high
          temperatures.{" "}
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
