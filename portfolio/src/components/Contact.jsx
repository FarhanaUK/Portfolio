import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="bg-neutral-700 p-8">
      <h1 className="flex justify-center text-3xl font-mono text-white font-bold ">Connect with me</h1>
      <div className='flex justify-center items-start gap-8 mt-6'>
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
    </div>
  );
}

export default Contact;
