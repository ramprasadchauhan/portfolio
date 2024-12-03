import navbar from "../assets/portfolio/navbar.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb89c6127750483.61489a00adcd0.png",
      name: "Fast Pizza App",
      hrefDemo: "https://famous-pizza.netlify.app/",
      hrefCode: "https://github.com/ramprasadchauhan/Pizza-app",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/originals/1d/74/d7/1d74d77af4e326b0fd181982cdb04b2a.png",
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
      src: "https://i.pinimg.com/originals/81/0a/5a/810a5ad87a41a8bcecfe61c6f4bae1af.png",
      name: "Media-Blog-App",
      hrefDemo: "https://mern-blog-1-lfrd.onrender.com/",
      hrefCode: "https://github.com/ramprasadchauhan/mern-blog",
    },
    {
      id: 5,
      src: "https://b2cdata.marketing.moveaws.com/images/b2bmrcdev/assets/itemeditorimage_5e86411da8c89.jpg",
      name: "Realtor",
      hrefDemo: "https://wanderlust-6k9k.onrender.com/",
      hrefCode: "https://github.com/ramprasadchauhan/realtor-clone",
    },
    {
      id: 6,
      src: "https://images.softwaresuggest.com/latest_screenshots/1690540671_airbnb%20clone%20software.png.jpg",
      name: "airbnb-clone",
      hrefDemo: "https://wanderlust-6k9k.onrender.com/",
      hrefCode: "https://github.com/ramprasadchauhan/airbnb",
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
                className="rounded-md h-44 w-80 object-cover duration-200 hover:scale-105"
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
