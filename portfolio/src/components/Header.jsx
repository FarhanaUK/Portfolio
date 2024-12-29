import {Link} from 'react-router-dom'

function Header() {
    return (
    <div className=" p-2 mb-2 font-mono font-thin ">
  <div className="text-white" >
        <nav className="flex justify-center mt-4">
          <ul className="flex space-x-20">
            <li>
              <Link
                className="text-lg hover:text-gray-400
      transition-colors duration-200"
                to="/"  
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-gray-400 
     transition-colors duration-200"
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-gray-400 
     transition-colors duration-200"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-gray-400 
     transition-colors duration-200"
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-gray-400 
     transition-colors duration-200"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

  
      
    </div>
    )
  }
  
  export default Header;