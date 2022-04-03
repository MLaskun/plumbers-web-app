import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  const[click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo'>
            <p className='sani' >SANI</p> <p className='max'>MAX</p>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Strona Główna
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Usługi
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                Galeria
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                | 605 823 926 || 576 007 167 |
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
//niebieski: #0e659b
//granat: #0a326d
//żółty: #bdbc30
//żółty2: #c1b434
export default Navbar