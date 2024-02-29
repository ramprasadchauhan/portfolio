import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      name: "Fast Pizza App",
      hrefDemo: "https://bucolic-twilight-5c4767.netlify.app/",
      hrefCode: "https://github.com/ramprasadchauhan/Pizza-app",
    },
    {
      id: 2,
      src: reactParallax,
      name: "Food Ordering App",
      hrefDemo: "https://reliable-medovik-1ead3b.netlify.app/",
      hrefCode: "https://github.com/ramprasadchauhan/Food-App",
    },
    {
      id: 3,
      src: navbar,
      name: "Growid Clone",
      hrefDemo:
        "https://65ca01ec37cc55d325320f2f--reliable-pie-f5de49.netlify.app/",
      hrefCode: "https://github.com/ramprasadchauhan/growbit-clone",
    },
    {
      id: 4,
      src: reactSmooth,
      hrefDemo: "https://bucolic-twilight-5c4767.netlify.app/",
      hrefCode: "https://github.com/ramprasadchauhan/Pizza-app",
    },
    {
      id: 5,
      src: installNode,
      hrefDemo: "https://bucolic-twilight-5c4767.netlify.app/",
      hrefCode: "https://github.com/ramprasadchauhan/Pizza-app",
    },
    {
      id: 6,
      src: reactWeather,
      hrefDemo: "https://bucolic-twilight-5c4767.netlify.app/",
      hrefCode: "https://github.com/ramprasadchauhan/Pizza-app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen pt-72 sm:pt-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, hrefDemo, hrefCode, name }) => (
            <div key={id} className="shadow-mdshadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="mt-4">{name} </h3>
                <div className="flex">
                  <a href={hrefDemo} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  hover:text-pink-500 ">
                      Demo
                    </button>
                  </a>

                  <a href={hrefCode} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105  hover:text-pink-500">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
