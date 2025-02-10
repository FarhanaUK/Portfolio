import laptop from "../../src/assets/laptop.json";
import Lottie from "lottie-react";

function About() {
  return (
    <div className="mb-6 text-lg leading-relaxed flex justify-center md:flex-row text-white p-6 md:p-12 mx-4 mt-28">
      <section className="md:w-2/3 space-y-6">
        <div className="flex flex-col items-center border border-indigo-900 rounded-lg bg-slate-900 p-6 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <h1 className="text-center text-2xl leading-relaxed mb-4 bg-indigo-100 w-full md:w-2/3 rounded-lg w-full mx-auto">
            My Journey Into Web Development
          </h1>
          <p>
            My journey into web development started with a simple question:{" "}
            <span className="italic">"How do websites do that?" </span>
            This curiosity sparked a deep dive into both front-end and back-end
            technologies, leading me to hands-on projects and real-world
            applications. Through my training at BloomTech, I developed
            expertise in essential tools and frameworks that shape modern web
            development:
          </p>

          <br />
          <div className="flex flex-col md:flex-row w-full items-start justify-between">
            <div className="w-full md:w-1/2">
              <ul className="list-disc pl-6 text-lg">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Tailwind CSS</li>
              </ul>
              <p className="my-6">
                These technologies allow me to build dynamic, user-friendly
                applications that address real-world challenges and provide
                seamless, interactive experiences.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-end items-start md:mt-[-70px] md:mb-[-70px]">
              <Lottie
                animationData={laptop}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  maxHeight: "450px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border border-indigo-900 rounded-lg bg-slate-900 p-6 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <h1 className="text-center text-2xl leading-relaxed mb-4 bg-indigo-900 md:w-2/3 rounded-lg w-full mx-auto">
            Professional Experience
          </h1>
          <p>
            Before becoming a developer, I worked in customer service and as a
            trainer at Amazon, where I honed skills like:
          </p>

          <br />
          <div className="flex flex-col md:flex-row w-full items-start justify-between">
            <div className="w-full md:w-1/2">
              <ul className="list-disc pl-6 text-lg">
                <li>
                  Communication: Effectively conveying complex ideas to diverse
                  audiences.
                </li>
                <li>
                  Empathy: Understanding user pain points to develop better
                  solutions.
                </li>
                <li>
                  Conflict Resolution: Navigating challenges with creative
                  problem-solving.
                </li>
              </ul>
              <p className="my-6">
                These experiences are invaluable in my development work, where I
                prioritize user needs and accessibility.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-end items-start md:mt-[-70px] md:mb-[-70px]">
              <Lottie
                animationData={laptop}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  maxHeight: "450px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border border-indigo-900 rounded-lg bg-slate-900 p-6 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <h1 className="text-center text-2xl leading-relaxed mb-4 bg-indigo-900 md:w-2/3 rounded-lg w-full mx-auto">
            Outside of Coding
          </h1>
          <p>
          When I’m not coding, I’m focused on personal growth and staying
            active. I’m passionate about:

          </p>

          <br />
          <div className="flex flex-col md:flex-row w-full items-start justify-between">
            <div className="w-full md:w-1/2">
              <ul className="list-disc pl-6 text-lg">
                <li>
                  Personal Development: Always looking for ways to grow both
                  professionally and personally.
                </li>
                <li>Fitness: Pilates keeps me energized and focused</li>
                <li>
                  Traveling: Exploring new cultures fuels my creativity and
                  broadens my perspective.
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-end items-start md:mt-[-70px] md:mb-[-70px]">
              <Lottie
                animationData={laptop}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  maxHeight: "450px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border border-indigo-900 rounded-lg bg-slate-900 p-6 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <h1 className="text-center text-2xl leading-relaxed mb-4 bg-indigo-900 md:w-2/3 rounded-lg w-full mx-auto">
            My Philosophy
          </h1>
          <p>
            I’m driven by the challenge of solving complex problems with clean,
            efficient solutions. Whether it’s designing an intuitive user
            interface or building a powerful back-end, I always aim to deliver
            applications that not only work well but also delight users.
          </p>

          <br />
          <div className="flex w-full md:flex-row items-start justify-between">
          <div className="w-full md:w-1/2 flex justify-end items-start md:mt-[-70px] md:mb-[-70px]">
              <Lottie
                animationData={laptop}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  maxHeight: "450px",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border border-indigo-900 rounded-lg bg-slate-900 p-6 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <h1 className="text-center text-2xl leading-relaxed mb-4 bg-indigo-900 md:w-2/3 rounded-lg w-full mx-auto">
            Let’s Connect!
          </h1>
          <p>
            Thank you for checking out my portfolio. If you’re interested in
            collaborating or exploring my projects, feel free to get in touch!
          </p>

          <br />
          <div className="flex w-full md:flex-row items-start justify-between">
          <div className="w-full md:w-1/2 flex justify-end items-start md:mt-[-70px] md:mb-[-70px]">
              <Lottie
                animationData={laptop}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  maxHeight: "450px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
