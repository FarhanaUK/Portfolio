import Header from "./Header";

function Hero() {
  return (
    <div className="bg-neutral-900">
      <Header />
      <div className="flex flex-col justify-center p-8 items-start text-white">
        <h1 className="text-5xl font-thin tracking-widest text-white animate__animated animate__fadeInLeft">
          FARHANA AKTAR
        </h1>
        <h2 className="font-NotoSansMono text-3xl mt-4">
          FULL STACK DEVELOPER
        </h2>
        <p className="font-mono mt-4 w-2/5">
          Building seamless web experiences with creativity and code – From
          front-end to back-end, I bring your ideas to life!
        </p>
        <a
        href="/Farhana_Aktar_2024-v-1.pdf"
        download
        className=" rounded-lg bg-black font-mono border px-4 py-2 mt-4 mb-4 animate__animated animate__pulse">
          Download Resume(CV)
        </a>
      </div>
    </div>
  );
}

export default Hero;
