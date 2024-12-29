function Projects() {
  const projects = [
    {
      title: "Note X",
      description:
        "This app is a note-taking tool built as a Chrome extension, developed using front-end technologies.",
      github: "https://github.com/FarhanaUK/Note-X",
      liveDemo: "dfdf",
      install:
        "https://chromewebstore.google.com/detail/note-x/fgmijdmcadjncmhkkchkjpnadnibfodn",
      image: "/1.png",
    },
    {
      title: "AI Love Partner ",
      description:
        "COMING SOON! This is a website that users can interact with an AI with memory.",
      github: "https://github.com/FarhanaUK/ai-project",
      liveDemo: "sfdd",
      image: "/mypic.jpg",
    },
    {
      title: "AI Love Partner ",
      description:
        "COMING SOON! This is a website that users can interact with an AI with memory.",
      github: "https://github.com/FarhanaUK/ai-project",
      liveDemo: "seefsdf",
      image: "/fantasy-characters-experiencing-love.jpg",
    },
    {
      title: "Note X",
      description:
        "This app is a note-taking tool built as a Chrome extension, developed using front-end technologies.",
      github: "https://github.com/FarhanaUK/Note-X",
      liveDemo: "dfdf",
      install:
        "https://chromewebstore.google.com/detail/note-x/fgmijdmcadjncmhkkchkjpnadnibfodn",
      image: "/1.png",
    },
    {
      title: "AI Love Partner ",
      description:
        "COMING SOON! This is a website that users can interact with an AI with memory.",
      github: "https://github.com/FarhanaUK/ai-project",
      liveDemo: "sfdd",
      image: "/mypic.jpg",
    },
    {
      title: "AI Love Partner ",
      description:
        "COMING SOON! This is a website that users can interact with an AI with memory.",
      github: "https://github.com/FarhanaUK/ai-project",
      liveDemo: "seefsdf",
      image: "/fantasy-characters-experiencing-love.jpg",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl text-white font-bold ">Projects</h1>
      <div className="justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 px-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-black flex flex-col justify-between items-center
             shadow-xl shadow-indigo-200 text-gray-800 rounded-xl overflow-hidden hover:shadow-2xl 
             transform hover:scale-105 transition duration-300"
          >
            <div className="relative w-full pb-[56.25%] "> 
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-4 mx-4 mb-4 h-full">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 flex-grow mt-2">{project.description}</p> 
              
              <div className="flex flex-wrap gap-1 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <>
                    <span>|</span>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 hover:underline"
                    >
                      Live Demo
                    </a>
                  </>
                )}

                {project.install && (
                  <>
                    <span>|</span>
                    <a
                      href={project.install}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 hover:underline"
                    >
                      Install
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
