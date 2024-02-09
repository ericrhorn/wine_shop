// import React, { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom'
// import '../style/nav.css'
// import WineBarIcon from '@mui/icons-material/WineBar';

// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Nav = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const openMenu = () => {
//     setShowMenu((prevShowMenu) => !prevShowMenu);
//   }

//   const closeMenu = () => {
//     setShowMenu(false);
//   }

//   const headerRef = useRef(null);

//   useEffect(() => {
//     let prevScrollPos = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const headerElement = headerRef.current;
//       if (!headerElement) {
//         return;
//       }
//       if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
//         headerElement.style.transform = "translateY(0)";
//       } else {
//         headerElement.style.transform = "translateY(-200px)"
//       }
//       prevScrollPos = currentScrollPos;
//     }

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   return (
//     <>
//       <div
//         position="fixed"
//         top={0}
//         left={0}
//         right={0}
//         translateY={0}
//         transitionProperty="transform"
//         transitionDuration=".3s"
//         transitionTimingFunction="ease-in-out"
//         backgroundColor="#18181b"
//         ref={headerRef}
//       >
//         <nav className='large-nav' style={{ backgroundColor: 'white', height: '50px', width: '100%' }}>
//           <WineBarIcon fontSize='large' />
//           <div className='navLinks'>
//             <Link to='/' relative='path'>
//               Home
//             </Link>
//             <Link to='/about' relative='path'>
//               About Us
//             </Link>
//             <Link to='/store' relative='path'>
//               Store
//             </Link>
//             <Link to='/login' relative='path'>
//               Login
//             </Link>
//           </div>
//           <div className='hamIcon' onClick={openMenu}>
//             {
//               showMenu ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />
//             }
//           </div>
//         </nav>
//         {showMenu && (
//           <nav className='hamLinks'>
//             <Link onClick={closeMenu} to='/' relative='path'>
//               Home
//             </Link>
//             <Link onClick={closeMenu} to='/about' relative='path'>
//               About
//             </Link>
//             <Link onClick={closeMenu} to='/Menu' relative='path'>
//               Menu
//             </Link>
//             <Link onClick={closeMenu} to='/Reservations' relative='path'>
//               Reservations
//             </Link>
//             <Link onClick={closeMenu} to='/order' relative='path'>
//               Order Online
//             </Link>
//             <Link onClick={closeMenu} to='/login' relative='path'>
//               Login
//             </Link>
//           </nav>
//         )}
//       </div>
//     </>
//   );
// }

// export default Nav;


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

import WineBarIcon from '@mui/icons-material/WineBar';
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../style/nav.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Nav(props) {

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color='default' >
          <Toolbar >
            <nav className='large-nav' style={{width: '100%'}}>
              <WineBarIcon fontSize='large' />
              <div className='navLinks'>
                <Link to='/' relative='path'>
                  Home
                </Link>
                <Link to='/about' relative='path'>
                  About Us
                </Link>
                <Link to='/store' relative='path'>
                  Store
                </Link>
                <Link to='/login' relative='path'>
                  Login
                </Link>
              </div>
              <div className='hamIcon' onClick={openMenu}>
                {
              showMenu ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />
            }
          </div>
        </nav>
        {showMenu && (
          <nav className='hamLinks' style={{width:'94%'}}>
            <Link onClick={closeMenu} to='/' relative='path'>
              Home
            </Link>
            <Link onClick={closeMenu} to='/about' relative='path'>
              About
            </Link>
            <Link onClick={closeMenu} to='/Menu' relative='path'>
              Menu
            </Link>
            <Link onClick={closeMenu} to='/Reservations' relative='path'>
              Reservations
            </Link>
            <Link onClick={closeMenu} to='/order' relative='path'>
              Order Online
            </Link>
            <Link onClick={closeMenu} to='/login' relative='path'>
              Login
            </Link>
          </nav>
          )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}