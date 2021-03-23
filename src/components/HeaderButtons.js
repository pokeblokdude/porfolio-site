import HeaderButton from './HeaderButton';
import { HiMoon, HiSun } from 'react-icons/hi'

const HeaderButtons = ({ darkTheme, toggleDarkTheme }) => {
    darkTheme = true;
    return (
        <div className='header-button-container'>
            <HeaderButton text='Portfolio' link='/portfolio' />
            <HeaderButton text='YouTube' link='https://www.youtube.com/channel/UCGPSDan8oaEvppSeaLNkofg' />
            <HeaderButton text='GitHub' link='https://github.com/pokeblokdude' />
            {
                darkTheme ? 
                    <HiSun size='24px' className='theme-switch' onClick={toggleDarkTheme}/> 
                    : 
                    <HiMoon size='24px' className='theme-switch' onClick={toggleDarkTheme}/>
            } 
        </div>
    )
}

export default HeaderButtons
