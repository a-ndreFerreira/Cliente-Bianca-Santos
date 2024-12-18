
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import './Navbar.css'

const Navbar = () => {

    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'Projetos', path: '/projects' },
        { link: 'Sobre', path: '/about' },
        { link: 'Contato', path: '/contact' }
    ];

    const navSocialItems = [
        { link: <FaFacebookF />, href: 'https://www.facebook.com' },
        { link: <FaInstagram />, href: 'https://www.instagram.com' },
        { link: <FaBehance />, href: 'https://www.behance.net' },
        { link: <FaLinkedinIn />, href: 'https://www.linkedin.com' }
    ];

    return (
        <header className='header'>
            <div className='divTitle'>
                <h1>
                    Arte Ianc
                </h1>
                <p>
                    Ilustradora | Designer | Produtora Cultural
                </p>
            </div>
            <nav className='navbar'>
                <ul className='navSocialItems'>
                    {
                        navSocialItems.map((socialItem) => (
                            <li key={socialItem.href}>
                                <a href={socialItem.href} target="_blank" >
                                    {socialItem.link}
                                </a>
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