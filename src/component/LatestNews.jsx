import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const headlines = [
  "Breaking News: Bangladesh continues to expand its digital infrastructure to improve online services across the country.",
  "Latest Update: New opportunities in technology and software development are creating jobs for young professionals.",
  "Sports: The national cricket team is preparing for its upcoming international matches with intensive training sessions.",
  "Education: Universities are introducing modern technology-focused courses to better prepare students for the job market.",
  "Technology: Artificial Intelligence and web development remain among the fastest-growing career fields worldwide.",
  "Business: Local startups are attracting increased investment as the digital economy continues to grow.",
];

const LatestNews = () => {
  return (
    <section
      aria-label="Latest News"
      className="flex items-center bg-base-200 rounded-md overflow-hidden"
    >
      <div className="bg-secondary text-white px-4 py-3 font-semibold text-sm md:text-base whitespace-nowrap">
        Latest
      </div>

      <Marquee
        pauseOnHover
        speed={45}
        gradient={false}
        className="py-3"
      >
        {headlines.map((headline, index) => (
          <span
            key={index}
            className="mx-10 font-medium text-sm md:text-base"
          >
            {headline}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default LatestNews;