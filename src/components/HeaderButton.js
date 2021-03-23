import { Link } from 'react-router-dom';

const HeaderButton = ({ link, text }) => {
    return (
        <Link className='header-button' to={link}>{text}</Link>
    )
}

export default HeaderButton
