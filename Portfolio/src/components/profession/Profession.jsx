import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend",
    description:
      "HTML5 , CSS3 , JQUERY , Boostrap , Tailwind , Javascript , React-Js",
  },
  {
    id: 2,
    title: "Backend",
    description:
      " Node.js, Express.js",
  },
  {
    id: 3,
    title: "DataBase",
    description:
      " MongoDB, Firebase",
  },
   {
    id: 3,
    title: "CS Fundamental  ",
    description:
      "C , C++ , DSA-JS [Basic]",
  }, {
    id: 3,
    title: "Tools & Platform ",
    description:
      "Git, GitHub , Visual-Studio ,  Adobe Photoshop [Basic]",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5 "
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">My Technical Skillset</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
           I have a solid foundation in modern web development, focusing on creating clean, responsive, and interactive user experiences. My frontend skills include HTML5, CSS3, JavaScript, jQuery, Bootstrap, Tailwind CSS, and React.js, which I use to build visually appealing and functional interfaces. On the backend, I work with Node.js and Express.js, supported by database experience in MongoDB and Firebase.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
           I also have basic knowledge of C programming and DSA in JavaScript, along with hands-on experience using tools like Git, GitHub, and Visual Studio. With a touch of design using Adobe Photoshop, combined with strong problem-solving, creativity, and team collaboration, I aim to develop efficient and meaningful digital solutions.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5" style={{ background:"rgb(26, 57, 106) "}}
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
