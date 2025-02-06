function Marquee () {
  const skills = [
    { image: "/html.svg", title: "HTML5" },
    { image: "/css.svg", title: "CSS3" },
    { image: "/javascript.svg", title: "Javascript" },
    { image: "/react.svg", title: "React" },
    { image: "/tailwind.svg", title: "Tailwind" },
    { image: "/firebase.svg", title: "Firebase" },
    { image: "/git.svg", title: "Git" },
    { image: "/nodejs-icon.svg", title: "Node.js" },
    { image: "/sqlite-icon.svg", title: "SQLite" },
  ];

  return (
    <div className="relative overflow-hidden w-full md:w-3/4 lg:w-1/2 p-12 mx-auto">
    

      <div className="relative flex items-center w-full overflow-hidden">
        <div className="flex animate-marquee">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative flex flex-col items-center border-t rounded-lg border border-indigo-900 bg-slate-900 w-28 h-28 justify-center mx-4"
            >
           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

              <img
                src={skill.image}
                alt={skill.title}
                className="w-10 h-10 mb-2 md:w-12 md:h-12"
              />
              <h3 className="text-white font-semibold text-center text-sm md:text-base">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
   
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-black/50 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
