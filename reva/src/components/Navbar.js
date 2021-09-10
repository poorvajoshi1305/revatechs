import React, { Component, useState } from 'react';
import { MenuItems1 } from './MenuItems';
import { MenuItems2 } from './MenuItems';
import { MenuItems3 } from './MenuItems';
import { MenuItems4 } from './MenuItems';
import { MenuItems5 } from './MenuItems';
import { Button } from './Button';
import './Navbar.css';
import Logo from '../components/Images/Logo.png';
import { Link } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';
import Dropdown5 from './Dropdown5';
import Dropdown from 'react-multilevel-dropdown';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
        return (
            <nav className="NavbarItems">
                <img src={Logo} height={75} width={75} alt='main-logo' />
                <Link to="/" className="nav-logo"><h1 className="navbar-logo">REVA TECHNOLOGIES</h1></Link>
                <i/>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ?  'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                {/* Nav options */}
                <ul className={click ?  'nav-menu active' : 'nav-menu'}>
                
                <ScrollIntoView selector="#home">
                    <Link className="nav-links" onClick={closeMobileMenu} to="/"><li>Home</li></Link>
                </ScrollIntoView>

                {/*<li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/services' className='nav-links'onClick={closeMobileMenu}> Services <i/>
                    </Link>
                    {dropdown && <Dropdown1 />}
                </li>
                {/* <ul className="dropdown">
                        <li className="dropdowm-item">hello</li>
                        <li className="dropdowm-item">hello</li>
                        <li className="dropdowm-item">hello</li>
                        <li className="dropdowm-item">hello</li>
                        <li className="dropdowm-item">hello</li>
                        
                    </ul> */}
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                    </Link>*/}
                    <Dropdown onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                        title='Services'
                        >
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            AI development
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            ML development
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Data Annotation
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            AI Development
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Predictive Analytics
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Web Development
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Mobile App Development
                            <Dropdown.Submenu>
                            <Dropdown.Item>
                                Ios App development
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Android App development
                            </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Corporate Training
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Digital Marketing
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Content Writing
                        </Dropdown.Item>
                        </Dropdown>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                    </Link>*/}
                    <Dropdown onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                        title='Solutions'
                        >
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Healthcare Industry
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Products
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            ML/AI
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Buy Industry
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Digital marketing / Content Writing
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Bspoke
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Web And Mobile App Development
                        </Dropdown.Item>
                        </Dropdown>
                </li>
                {/*<Link className="nav-links" onClick={closeMobileMenu}to='/career'><li>Career</li></Link>
                <Link className="nav-links" onClick={closeMobileMenu}to='/clients'><li>Clients</li></Link>*/}
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                    </Link>*/}
                    <Dropdown onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                        title='Career'
                        >
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Career Openings
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Career at Reva Technologies
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Current Openings
                        </Dropdown.Item>
                        
                        </Dropdown>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    {/*<Link to='/solutions' className='nav-links'onClick={closeMobileMenu}>
                    </Link>*/}
                    <Dropdown onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                        title='Clients'
                        >
                        <Dropdown.Item
                            onClick={closeMobileMenu}
                        >
                            Our Clients
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Our Valuable Clients
                            <Dropdown.Submenu>
                            <Dropdown.Item>
                                Startup
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Entreprise
                            </Dropdown.Item>
                            </Dropdown.Submenu>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Client Testimonials
                        </Dropdown.Item>
                        </Dropdown>
                </li>
                <ScrollIntoView selector="#aboutPage">
                      <Link className="nav-links" to="/"><li>About Us</li></Link>
                </ScrollIntoView>
                
                    <Link className="nav-links" onClick={closeMobileMenu}to='/blog'><li>Blog</li></Link>
                    <Link className="nav-links-mobile" to="/"><li>Contact Us</li></Link>

                </ul>
                

                <Link to="/contact-us"><Button className='navbar-button'>Contact Us</Button></Link>
            </nav>
        )
    }

export default Navbar;
// document.getElementById('card-content').scrollIntoView()
