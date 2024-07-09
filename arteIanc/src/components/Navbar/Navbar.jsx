
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'Contato', path: '/contact' }
    ];

    const navSocialItems = [
        { link: 'Fac', path: '#1' },
        { link: 'Int', path: '#2' },
        { link: 'Beh', path: '#3' }
    ];

    return (
        <header>
            <div>
                <h2>
                    Bianca Santos
                </h2>
                <p>
                    Ilustradora | Designer | Produtora Cultural
                </p>
            </div>
            <div>
                <ul>
                    {
                        navSocialItems.map((socialItem) => (
                            <li key={socialItem.link}>
                                <NavLink to={socialItem.path} >
                                    {socialItem.link}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <nav>
                    <ul>
                        {
                            navItems.map((item) => (
                                <li key={item.link}>
                                    <NavLink to={item.path} >
                                        {item.link}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar