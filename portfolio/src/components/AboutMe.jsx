function AboutMe() {
    return (
      <div className="flex justify-center items-center">
      <div className="flex justify-between items-center bg-gradient-to-r from-neutral-300 to-neutral-900 shadow-[0px_20px_10px_rgba(0,0,0,1)] py-2 p-4">


        <div className="w-4/5 pr-8 ">



          <h1 className="text-3xl font-bold ml-4 my-2">About Me</h1>
          <p className="ml-4">
            Hi, I’m Farhana Aktar, a passionate Full Stack Developer committed
            to creating seamless web experiences. My journey began with a
            curiosity for how websites work, which led me to dive into both
            front-end and back-end development. Over time, I honed my skills in
            technologies like React, Node.js, and Tailwind CSS, allowing me to
            build responsive and dynamic web applications.
          </p>
          <p className="my-4 ml-4">
            I am driven by problem-solving and the opportunity to transform
            ideas into functional, user-friendly solutions. Whether it’s
            developing a sleek landing page or architecting a complex web
            system, I am passionate about crafting innovative solutions that
            make a real impact. Let’s build something amazing together!
          </p>
        </div>

        <div className="w-4/5 flex justify-center">
          <img 
          src="/Screenshot 2024-12-26 164505.jpg"
          alt="Farhana Aktar"
          height="300" width="200"
          className="rounded-lg shadow-lg"/>
        </div>
      </div>
      </div>
    );
}

export default AboutMe;
