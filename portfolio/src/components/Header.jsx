import {Link} from 'react-router-dom'

function Header() {
    return (
    <div className=" p-2 mb-2 font-thin z-10">
  <div className="text-white" >
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4 sm:space-x-6 md:space-x-10 lg:space-x-20 text-sm sm:text-base md:text-lg">
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
                About
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
          </ul>
        </nav>
      </div>

  
      
    </div>
    
    )
  }
  
  export default Header;