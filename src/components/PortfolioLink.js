import { HiLink } from 'react-icons/hi'

const PortfolioLink = ({text, link}) => {
    return (
        <div className='pf-link'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
                <HiLink className='pf-link-icon' size='28px' />
                <h2>{text}</h2>
            </a>
        </div>
    )
}

export default PortfolioLink
