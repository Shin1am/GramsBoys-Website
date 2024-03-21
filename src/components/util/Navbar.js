import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
import Cart from '../Assets/cart.png';
import menuIcon from '../Assets/menu.png';
import closeIcon from '../Assets/close.png';
import searchIcon from '../Assets/search.png';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  // const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => setClick(!click);

  const closedMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if(window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // }

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
  
  // useEffect(() => {
  //   showButton();
  // }, [])

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closedMobileMenu}>
            GramBoys
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <img src={click ? closeIcon : menuIcon} alt="Menu Icon" 
            style={{ width: '20px', height: '20px', 
            filter: 'brightness(0) invert(1) sepia(0) saturate(10000%) hue-rotate(0deg)' }} 
            />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closedMobileMenu}>
                หน้าหลัก
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/courses' className='nav-links' onClick={closedMobileMenu}>
                คอร์สเรียน
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/AboutUs' className='nav-links' onClick={closedMobileMenu}>
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/log-in' className='nav-links' onClick={closedMobileMenu}>
                เข้าสู่ระบบ/ลงชื่อเข้าใช้
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/shopping-cart' className='nav-links' onClick={closedMobileMenu} >
                <img src={Cart} alt='Cart' style={{ width: '20px', height: '20px',
                filter: 'brightness(0) invert(1) sepia(0) saturate(10000%) hue-rotate(0deg)'}} />
              </Link>
            </li>
            <li className='nav-item'>
              <div className='nav-links'>
                <img src={searchIcon} alt='search' style={{ width: '20px', height: '20px'}} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar