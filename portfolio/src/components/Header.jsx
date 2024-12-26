import {Link} from 'react-router-dom'

function Header() {
    return (<div className="text-white p-4 mb-4">
  <div className="text-white">
        <nav className="flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                className="text-lg hover:text-teal-400
      transition-colors duration-200"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
     transition-colors duration-200"
                to="/about"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
     transition-colors duration-200"
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
     transition-colors duration-200"
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="text-lg hover:text-teal-400 
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