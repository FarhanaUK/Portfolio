function Skills() {
  const skills = [
    {
      image: "/html.svg",
      title: "HTML5",
    },
    {
      image: "/css.svg",
      title: "CSS3",
    },
    {
      image: "/javascript.svg",
      title: "Javascript",
    },
    {
      image: "/react.svg",
      title: "React",
    },
    {
      image: "/tailwind.svg",
      title: "Tailwind",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl text-white font-bold mb-8">Skills</h1>
      <div className="flex justify-center space-x-10 flex">
        {skills.map((skill, index) => (
          <div 
          key={index}
          className="relative flex flex-col items-center border-t rounded-lg border border-[#3c1f23] bg-[#2c1127]  w-28 h-28 flex justify-center ">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-600 to-transparent"></div>

            <div className="mb-2 ">
              <img 
              src={skill.image}
              alt={skill.title}
              className="w-10 h-10"/>
            </div>
            <div>
              <h3 className="text-white font-semibold text-center ">
              {skill.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
