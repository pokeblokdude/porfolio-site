import HeaderButton from './HeaderButton';
import { HiMoon, HiSun } from 'react-icons/hi'

const HeaderButtons = ({ darkTheme }) => {
    darkTheme = true;
    return (
        <div className='header-button-container'>
            <HeaderButton text='Portfolio' link='/portfolio' />
            <HeaderButton text='YouTube' link='https://www.youtube.com/channel/UCGPSDan8oaEvppSeaLNkofg' />
            <HeaderButton text='GitHub' link='https://github.com/pokeblokdude' />
            {darkTheme ? <HiSun size='24px' className='theme-switch' /> : <HiMoon size='24px' className='theme-switch' />} 
        </div>
    )
}

export default HeaderButtons
