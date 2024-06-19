import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
function Sidebar({links, close}) {
  const location = useLocation()
  return (
    <div className='sidebar' onClick={close}>
        {links.map(link => (
          <Link key={link.name} className ={location.pathname == link.path ? "sidebar-link active": 'sidebar-link' } to={link.path}>
            <FontAwesomeIcon icon={link.icons} />
            {link.name}</Link>
        ))}
    </div>
  )
}

export default Sidebar