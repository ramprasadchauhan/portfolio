const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-72 sm:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-4">
          Welcome to my portfolio! I am a highly motivated and hardworking
          individual with a keen ability to swiftly acquire and apply new skills
          to address real-time challenges. As a passionate Front-End Web
          Developer, I specialize in crafting engaging websites and web
          applications.
        </p>

        <br />

        <p className="text-xl">
          My skill set includes proficiency in HTML, CSS, and JavaScript, as
          well as expertise in React.js, React-Redux, and Tailwind CSS. I take
          pride in translating design concepts into seamless and visually
          appealing user experiences. Beyond the front end, I have expanded my
          expertise to become a versatile Full-Stack Web Developer.
        </p>
        <p className="text-xl">
          In addition to my front-end skills, I have developed My skills in
          full-stack development, where I leverage Node.js, Express framework,
          and MongoDB as Database to create robust and scalable web
          applications. My commitment to staying current with industry trends
          and my eagerness to embrace new technologies make me a dynamic
          developer ready to tackle diverse challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
