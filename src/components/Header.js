import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';

const Header = ({darkTheme, toggleDarkTheme}) => {
    return (
        <header className='header'>
            <div className='header-container'>
                <h1>
                    <Link className='header-title' to='/'>Alex Howe</Link>
                </h1>
                <HeaderButtons darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme} />
            </div>
        </header>
    )
}

export default Header;
