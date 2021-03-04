import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { HiOutlineMenu } from 'react-icons/hi';
import { Container } from './styles';
import { Sidebardata } from './sidebarData';

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = (): void => setSidebar(!sidebar);
  return (
    <Container>
      <div className="navbar">
        <HiOutlineMenu onClick={showSideBar} className="menu-burguer" />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <Link to="#" className="linkArrowLeft">
            <IoIosArrowDropleftCircle className="arrowLeft" />
          </Link>
          {Sidebardata.map(item => {
            return (
              <li key={item.title} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;