function Skills() {
  const skills = [
    { image: "/html.svg", title: "HTML5" },
    { image: "/css.svg", title: "CSS3" },
    { image: "/javascript.svg", title: "Javascript" },
    { image: "/react.svg", title: "React" },
    { image: "/tailwind.svg", title: "Tailwind" },
    { image: "/firebase.svg", title: "Firebase" },
    { image: "/git.svg", title: "Git" },
    { image: "/nodejs-icon.svg", title: "Node.js" },
    { image: "/public/sqlite-icon.svg", title: "SQLite" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl text-white font-bold mb-8">Skills</h1>
      {/* Marquee container */}
      <div className="rfm-marquee-container ">
        <div className="rfm-marquee gap-x-10">
          {/* Duplicate the skills list for seamless looping */}
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="rfm-initial-child-container relative flex flex-col items-center border-t rounded-lg border border-[#1f223c] bg-[#11152c] w-28 h-28 justify-center"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
              <div className="mb-2">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-10 h-10"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-center">
                  {skill.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* Overlay for gradient effect */}
        <div className="rfm-overlay"></div>
      </div>
    </div>
  );
}

export default Skills;
