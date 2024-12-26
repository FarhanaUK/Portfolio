
function Projects() {
  const projects = [
    {
      title: "Note X",
      description:
        "This app is a note-taking tool built as a Chrome extension, developed using front-end technologies.",
      github: "https://github.com/FarhanaUK/Note-X",
      liveDemo: "",
      image:
        "/publiC/Screenshot 2024-12-26 150921.jpg"
    },
    {
      title: "AI Love Partner ",
      description:
        "COMING SOON! This is a website that users can interact with an AI with memory enabling you to form a real life love relationship",
      github: "https://github.com/FarhanaUK/ai-project",
      liveDemo: "",
      image: "/public/mypic.jpg",
    },
    {
      title: "AI Love Partner ",
      description:
        "COMING SOON! This is a website that users can interact with an AI with memory enabling you to form a real life love relationship, this uses full-stack",
      github: "https://github.com/FarhanaUK/ai-project",
      liveDemo: "",
      image: "/public/fantasy-characters-experiencing-love.jpg",
    },
  ];

  return (
    <div className="text-white p-8 bg-gray-900">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((projects, index) => (
          <div key={index} className="bg-black text-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 ">
            <img
        src={projects.image}
        alt={projects.title}
        className={`w-full h-56 object-cover ${index === 2 ? 'object-top' : ''}`} 
      />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{projects.title}</h3>
              <p className="text-gray-400 mb-2">{projects.description}</p>
              <div>
                <a
                  href={projects.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  GitHub
                </a>
                <span className="mx-2">|</span>
                <a
                  href={projects.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;