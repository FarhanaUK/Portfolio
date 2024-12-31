

function Projects () {
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

  const others = [
    { title: "DOM" },
    { title: "VSCode" },
    { title: "GitHub" },
    { title: "Redux" },
    { title: "Jest" },
    { title: "Supertest" },
    { title: "JSON Web Token" },
    { title: "Algorithms" },
    { title: "Data Structures" },
    { title: "API" },
    { title: "OpenAi" },
    { title: "Code Refractoring" },
    { title: "Debuggin" },
    { title: "Automation with Make" },
    { title: "Context API" },
    { title: "Reducers" },
    { title: "Webpack" },
    { title: "Babel" },
    { title: "Postman" },
    { title: "ESLint" },
    { title: "State Management" },
    { title: "Test-Driven Development (TDD)" },
    { title: "Responsive Design" },
    { title: "Vercel" },
    { title: "Vercel" },
    { title: "Axios" },
    { title: "YUP" },
    { title: "Architecture," },
    { title: "Deployment," },
    { title: "Customer Service" },
    { title: "Leadership" },
    { title: "Training" },
  ];

  return (
  
      <div>
        <div className="flex justify-center p-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative flex flex-col items-center border-t rounded-lg border border-[#1f303c] bg-[rgb(78, 80, 80)] w-28 h-28 justify-center mx-4"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

              <img
                src={skill.image}
                alt={skill.title}
                className="w-10 h-10 mb-2"
              />
              <h3 className="text-white font-semibold text-center">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-8">
          {others.map((other, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative flex flex-col items-center border-t rounded-lg border border-[#1f303c] bg-[rgb(78, 80, 80)] w-28 h-28 justify-center mx-4"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

              <img
                src={others.image}
                alt={others.title}
                className="w-10 h-10 mb-2"
              />
              <h3 className="text-white font-semibold text-center">
                {others.title}
              </h3>
            </div>
          ))}
        </div>
      
      
    </div>
  );
}
export default Projects