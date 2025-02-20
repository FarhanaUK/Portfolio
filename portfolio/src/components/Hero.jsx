function Hero() {
  return (
    <div className="flex flex-col justify-center p-8 items-center text-white">
      <h1 className="text-4xl sm:text-5xl font-thin tracking-widest text-white animate__animated animate__fadeInLeft animate__delay-1s">
        FARHANA AKTAR
      </h1>
      <h2 className="text-2xl sm:text-3xl mt-4">
        FULL STACK DEVELOPER
      </h2>
      <p className="mt-4 w-full sm:w-3/5 md:w-2/5">
        Building seamless web experiences with creativity and code – From
        front-end to back-end, I bring your ideas to life!
      </p>
      <a
        href="/Farhana_Aktar_2025.pdf"
        download
        className="rounded-lg border-transparent px-4 py-2 mt-4 mb-4 bg-transparent pulse-color-change text-center block w-auto sm:w-1/2 md:w-auto">
        Download Resume (CV)
      </a>
    </div>
  );
}

export default Hero;
