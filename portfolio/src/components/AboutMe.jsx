function AboutMe() {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-between items-center
       bg-gradient-to-r from-neutral-200 to-neutral-700 md:from-neutral-300 md:to-neutral  
      shadow-[0px_20px_10px_rgba(0,0,0,1)] py-4 lg:py-8 w-full rounded-lg">
        <div className="w-full lg:w-2/3 px-4">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
          Hi! I’m a Full Stack Developer who’s obsessed with making things work (and work beautifully). 
          My journey into software engineering started with a simple question:
          “How do websites even do that?” One curiosity led to another, and before I knew it,
          I was knee-deep in JavaScript, React, Node.js, and Tailwind CSS, figuring out how to turn ideas into interactive web experiences.
          </p>
          <p className="my-4">
          I might have only a few projects under my belt right now, 
          but each one is a stepping stone to mastering the craft. 
          Software engineering, for me, isn’t just about writing code—it’s about solving problems, 
          learning something new every day, and creating stuff that actually makes a difference. 
          I get a real kick out of building things that people enjoy using, whether it's an elegant front-end or a solid back-end.
          </p>
          <p>
          If you’re into clean, user-friendly apps and innovative solutions, 
          we’re on the same page! Let’s build something fun together. 
          (And yes, this portfolio you’re checking out right now is one of the things I’ve built. Sneaky, right?)
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
