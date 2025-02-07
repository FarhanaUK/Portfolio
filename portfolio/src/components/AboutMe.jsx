function AboutMe() {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center
       bg-gradient-to-r from-neutral-200 to-neutral-700 md:from-neutral-300 md:to-neutral  
      shadow-[0px_20px_10px_rgba(0,0,0,1)] py-4 lg:py-8 w-full rounded-lg">
        <div className="w-full lg:w-2/3 px-4">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
            Hi, I’m Farhana Aktar, a passionate Full Stack Developer committed
            to creating seamless web experiences. My journey began with a
            curiosity for how websites work, which led me to dive into both
            front-end and back-end development. Over time, I honed my skills in
            technologies like React, Node.js, and Tailwind CSS, allowing me to
            build responsive and dynamic web applications.
          </p>
          <p className="my-4">
            I am driven by problem-solving and the opportunity to transform
            ideas into functional, user-friendly solutions. Whether it’s
            developing a sleek landing page or architecting a complex web
            system, I am passionate about crafting innovative solutions that
            make a real impact. Let’s build something amazing together!
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
          <img 
            src="/Screenshot 2024-12-26 164505.jpg"
            alt="Farhana Aktar"
            className="rounded-lg shadow-lg w-4/5 md:w-3/5 lg:w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
