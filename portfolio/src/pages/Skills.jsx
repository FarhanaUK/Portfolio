import SearchSkills from "./SearchSkills";
import { useState } from "react";

function Skills() {

  const [search, setSearch] = useState("")
  const [filteredSkills, setFilteredSkills] = useState([])


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
    { image: "/tree-structure-svgrepo-com.svg", title: "DOM" },
    { image: "/vscode-svgrepo-com.svg", title: "VSCode" },
    { image: "/github-svgrepo-com.svg", title: "GitHub" },
    { image: "/redux-svgrepo-com.svg", title: "Redux" },
    { image: "/jest-snapshot-svgrepo-com.svg", title: "Jest" },
    { image: "/check-mark-button-svgrepo-com.svg", title: "Supertest" },
    { image: "/jwt-3.svg", title: "JSON Web Token" },
    { image: "Algo.png", title: "Algorithms" },
    { image: "/6174618.png", title: "Data Structures" },
    { image: "/api-svgrepo-com.svg", title: "API" },
    { image: "/openai-svgrepo-com.svg", title: "OpenAi" },
    { image: "/rb_82158.png", title: "Code Refactoring" },
    { image: "/debug-script-svgrepo-com.svg", title: "Debugging" },
    { image: "/expressjs-ar21.svg", title: "Express.js" },
    { image: "/webpack-svgrepo-com (1).svg", title: "Webpack" },
    { image: "/babeljs-icon.svg", title: "Babel" },
    { image: "/npm-svgrepo-com (1).svg", title: "NPM" },
    { image: "/postman-icon-svgrepo-com.svg", title: "Postman" },
    { image: "/eslint-svgrepo-com.svg", title: "ESLint" },
    { image: "/state.png", title: "State Management" },
    { image: "/TDD.png", title: "Test-Driven Development (TDD)" },
    { image: "/responsive.png", title: "Responsive Design" },
    { image: "/security-safe-shield-svgrepo-com.svg", title: "Authentication" },
    { image: "/identity-and-access-management-svgrepo-com.svg", title: "Authorization"},
    { image: "/18356830.png", title: "Validation" },
    { image: "/cache.png", title: "Cache" },
    { image: "/CRUD.png", title: "CRUD" },
    { image: "/vercel-fill-svgrepo-com.svg", title: "Vercel" },
    { image: "/axios.svg", title: "Axios" },
    { image: "/systemarchi.png", title: "Architecture" },
    { image: "/cloud-acceleration-svgrepo-com.svg", title: "Deployment" },
    { image: "/customer-service-svgrepo-com.svg", title: "Customer Service" },
    { image: "/leadership-svgrepo-com.svg", title: "Leadership" },
    { image: "/communicate.png", title: "Communication" },
  ];



  const handleSearch = () => {
    if (search) {
      setFilteredSkills(
        skills.filter((skill) =>
          skill.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredSkills(skills);
    }
  };

  const onClick = () => {
    setFilteredSkills(skills)
  }
       

 const skillsToDisplay = filteredSkills.length > 0 ? filteredSkills : skills
  return (
    <div className="p-8">
      <div>
        <SearchSkills value={search} setValue={setSearch} handleSearch={handleSearch} onClick={onClick}/>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-12 mt-8">
        {skillsToDisplay.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative flex flex-col items-center border-t rounded-lg border border-indigo-900 bg-slate-700 w-28 h-28 justify-center mx-4"
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
    </div>
  );
}

export default Skills;
