import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <h1>
                    <Link className='header-title' to='/'>Alex Howe</Link>
                </h1>
                <HeaderButtons />
            </div>
        </header>
    )
}

export default Header;
