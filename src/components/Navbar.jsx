import Logo from '../assets/Favicon.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo-link" href="/">
                <img className="logo" src={Logo} alt="" />
            </a>
            <ul className='navbar--ul'>
                <li>
                    <button>Connect Wallet</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
