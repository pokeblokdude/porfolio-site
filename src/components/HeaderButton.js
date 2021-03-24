import { Link } from 'react-router-dom';

const HeaderButton = ({ link, text }) => {
    return (link.startsWith('https') || link.startsWith('http')) ? (
        <a className='header-button' href={link} target='_blank' rel='noopener noreferrer'>{text}</a>
    ) :
    ( <Link className='header-button' to={link}>{text}</Link> );
}

export default HeaderButton
