function About() {
    return (
      <div className="flex justify-between items-center bg-gradient-to-r from-neutral-300 to-neutral-900 p-8 border-4 border-indigo-500 rounded-lg"> {/* Added border and rounded corners */}
        <div className="w-1/2 pr-8 ml-4 shadow-2xl shadow-indigo-400">
          <h1 className="text-3xl font-mono font-bold mb-4">About Me</h1>
          <p className="font-mono">
            Hi, I’m Farhana Aktar, a passionate Full Stack Developer committed
            to creating seamless web experiences. My journey began with a
            curiosity for how websites work, which led me to dive into both
            front-end and back-end development. Over time, I honed my skills in
            technologies like React, Node.js, and Tailwind CSS, allowing me to
            build responsive and dynamic web applications.
          </p>
          <p className="mt-4 font-mono">
            I am driven by problem-solving and the opportunity to transform
            ideas into functional, user-friendly solutions. Whether it’s
            developing a sleek landing page or architecting a complex web
            system, I am passionate about crafting innovative solutions that
            make a real impact. Let’s build something amazing together!
          </p>
        </div>

        <div className="w-1/3">
          <img 
          src="/Screenshot 2024-12-26 164505.jpg"
          alt="Farhana Aktar"
          height="324" width="262"
          className="rounded-lg shadow-lg"/>
        </div>
      </div>
    );
}

export default About;
