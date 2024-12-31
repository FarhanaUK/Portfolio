import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div>
    <footer className="bg-neutral-700 p-8 md:p-4">
      <h1 className="flex justify-center text-3xl text-white font-bold ">Connect With Me</h1>
      <div className='flex flex-wrap justify-center items-start gap-8 mt-6'>
        <a
          href="https://www.linkedin.com/in/farhana-aktar-5295167a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-blue-400"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
         <a
          href="mailto:farhanaaktar@live.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-blue-400"
          aria-label="LinkedIn profile"
        >
          <FaEnvelope className="mr-2" /> Email
        </a>
        
        <a
          href="https://github.com/FarhanaUK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-blue-400"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
      </div>

      <p className='text-center pt-6'>&copy; {new Date().getFullYear()} Farhana Aktar</p>
    </footer>
    </div>
  );
}

export default Footer;
