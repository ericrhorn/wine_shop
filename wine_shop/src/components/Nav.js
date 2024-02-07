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


import React, { useEffect, useRef } from "react";

import { Box, HStack } from "@chakra-ui/react";



const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
        if (!headerElement){
          return;
        }
        if (prevScrollPos > currentScrollPos){
          headerElement.style.transform = "translateY(0)";
        } else {
          headerElement.style.transform = "translateY(-200px)"
        }
        prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])



  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects-section">Projects</a>
              <a href="/#contactme-section">Contact Me</a>
              {/* can also do the below */}
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
