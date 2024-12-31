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
   { image: "tree-structure-svgrepo-com.svg", title: "DOM" },
  { image: "/vscode-svgrepo-com.svg", title: "VSCode" },
  { image: "/github-svgrepo-com.svg", title: "GitHub" },
  { image: "/redux-svgrepo-com.svg", title: "Redux" },
  { image: "/jest-snapshot-svgrepo-com.svg", title: "Jest" },
  { image: "/check-mark-button-svgrepo-com.svg", title: "Supertest" },
  { image: "/public", title: "JSON Web Token" },
  { image: "/path-svgrepo-com.svg", title: "Algorithms" },
  { image: "/public", title: "Data Structures" },
  { image: "/api-svgrepo-com.svg", title: "API"},
  { image: "/openai-svgrepo-com.svg", title: "OpenAi" },
  { image: "/public", title: "Code Refactoring" },
  { image: "/debug-script-svgrepo-com.svg", title: "Debugging" },
  { image: "/public", title: "Automation with Make" },
  { image: "/public", title: "Context API" },
  { image: "/public", title: "Reducers" },
  { image: "/expressjs-ar21.svg", title: "Express.js" },
  { image: "/public/webpack-svgrepo-com (1).svg", title: "Webpack" },
  { image: "/public", title: "Babel" },
  { image: "/postman-icon-svgrepo-com.svg", title: "Postman" },
  { image: "/public/eslint-svgrepo-com.svg", title: "ESLint" },
  { image: "/public", title: "State Management" },
  { image: "/public", title: "Test-Driven Development (TDD)" },
  { image: "/public", title: "Responsive Design" },
  { image: "/public", title: "Authentication" },
  { image: "/identity-and-access-management-svgrepo-com.svg", title: "Authorization" },
  { image: "/public", title: "Validation" },
  { image: "/public", title: "Cache" },
  { image: "/public", title: "CRUD" },
  { image: "/vercel-fill-svgrepo-com.svg", title: "Vercel" },
  { image: "/public", title: "Axios" },
  { image: "/public", title: "YUP" },
  { image: "/public/architecture-builder-svgrepo-com.svg", title: "Architecture" },
  { image: "/cloud-acceleration-svgrepo-com.svg", title: "Deployment" },
  { image: "/public", title: "Customer Service" },
  { image: "/public", title: "Leadership" },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-12 mt-8">
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

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-12 mt-12">
        {others.map((other, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative flex flex-col items-center border-t rounded-lg border border-[#1f303c] bg-[rgb(78, 80, 80)] w-28 h-28 justify-center mx-4"
          >
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <img
              src={other.image}
              alt={other.title}
              className="w-10 h-10 mb-2"
            />
            
            <h3 className="text-white font-semibold text-center">

              {other.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
