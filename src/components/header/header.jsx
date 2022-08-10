import logo from './Logo.png';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
        </div>
    )
}

export default Header;