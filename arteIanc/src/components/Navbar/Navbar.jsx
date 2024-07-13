
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { NavLink, Link } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'Contato', path: '/contact' },
        { link: 'Trabalhos', path: '/works' }
    ];

    const navSocialItems = [
        { link: <FaFacebookF />, path: '#1' },
        { link: <FaInstagram />, path: '#2' },
        { link: <FaBehance />, path: '#3' },
        { link: <FaLinkedinIn />, path: '#4' }
    ];

    return (
        <header className='header'>
            <div className='divTitle'>
                <h1>
                    Bianca Santos
                </h1>
                <p>
                    Ilustradora | Designer | Produtora Cultural
                </p>
            </div>
            <nav className='navbar'>
                <ul className='navSocialItems'>
                    {
                        navSocialItems.map((socialItem) => (
                            <li key={socialItem.path}>
                                <Link to={socialItem.path} >
                                    {socialItem.link}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className='navItems'>
                    {
                        navItems.map((navItem) => (
                            <li key={navItem.path}>
                                <NavLink to={navItem.path}
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                    {navItem.link}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar