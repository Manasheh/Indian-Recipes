import  { useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faCog, faUtensils } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const links = [
    {
      name: 'Home',
      path: '/',
      icons: faHome
    },
    {
      name: 'Recipes',
      path: '/recipes',
      icons: faList
    },
    {
      name: 'Settings',
      path: '/settings',
      icons: faCog
    }
  ]

  function closeSidebar() {
    setShowSidebar(false)
  }
  const location = useLocation()
  return (
    <>
      <div className='navbar container'>
        <Link to="/" className='logo'>
          <FontAwesomeIcon icon={faUtensils} /> {/* Keep your main logo here */}
          {/* <span>MyLogo</span> */}
        </Link>
        <div className="nav-links">
          {
            links.map(link => (
              <Link key={link.name} to={link.path} className={location.pathname == link.path ? 'active': 'sidebar-link'}>{link.name}</Link>
            ))
          }
         
        </div>
        <div className={showSidebar ? 'sidebar-btn active': 'sidebar-btn'} onClick={() => setShowSidebar(true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
    </div>
    {showSidebar && <Sidebar close = {closeSidebar} links = {links}/> }
    </>
  )
}

export default Navbar