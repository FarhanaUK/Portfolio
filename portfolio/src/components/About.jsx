
function About() {
    return (
      <div className="flex justify-between items-center bg-gradient-to-r from-slate-500 to-slate-800 p-8">
        <div className="w-1/2 pr-8">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p>
            Hi, I’m Farhana Aktar, a passionate Full Stack Developer committed
            to creating seamless web experiences. My journey began with a
            curiosity for how websites work, which led me to dive into both
            front-end and back-end development. Over time, I honed my skills in
            technologies like React, Node.js, and Tailwind CSS, allowing me to
            build responsive and dynamic web applications.
          </p>
          <p className="mt-4">
            I am driven by problem-solving and the opportunity to transform
            ideas into functional, user-friendly solutions. Whether it’s
            developing a sleek landing page or architecting a complex web
            system, I am passionate about crafting innovative solutions that
            make a real impact. Let’s build something amazing together!
          </p>
        </div>

        <div className="w-2/5 flex justfiy-end">
          <img 
          src="/mypic.jpg"
          alt="Farhana Aktar"
          className="rounded-lg shadow-lg"/>
        </div>
      </div>
    );
  }
  
  export default About;