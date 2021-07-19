import PortfolioLink from './PortfolioLink';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import snowpointIngamePromo from '../res/portfolio/misc/csgo/snowpoint-ingame-promo.jpg';
import snowpointIngameRamp from '../res/portfolio/misc/csgo/snowpoint-ingame-ramp.jpg';
import snowpointIngameTopdown from '../res/portfolio/misc/csgo/snowpoint-ingame-topdown.jpg';

import salisburyIngameCt from '../res/portfolio/misc/csgo/salisbury-ingame-ct.jpg'
import salisburyIngameT from '../res/portfolio/misc/csgo/salisbury-ingame-t.jpg'
import salisburyIngamePromo from '../res/portfolio/misc/csgo/salisbury-ingame-promo.jpg'
import salisburyIngameSite from '../res/portfolio/misc/csgo/salisbury-ingame-site.jpg'
import salisburyIngameTunnel from '../res/portfolio/misc/csgo/salisbury-ingame-tunnel.jpg'
import salisburyIngameLong from '../res/portfolio/misc/csgo/salisbury-ingame-long.jpg'
import salisburyIngameTopdown from '../res/portfolio/misc/csgo/salisbury-ingame-topdown.jpg'



const PortfolioMisc = () => {
    return (
        <div className='portfolio-misc'>
            <h1>CS:GO Maps</h1>
            <p>Made using Valve's Hammer Editor</p>
            <PortfolioLink text='am_snowpoint' link='https://steamcommunity.com/sharedfiles/filedetails/?id=1980557586' />
            <Carousel className='img-carousel' axis='horizontal' infiniteLoop showStatus={false}>
                <div>
                    <img src={snowpointIngamePromo} />
                </div>
                <div>
                    <img src={snowpointIngameRamp} />
                </div>
                <div>
                    <img src={snowpointIngameTopdown} />
                </div>
            </Carousel>
            <p>szfvujhsdfljhsf</p>

            <PortfolioLink text='de_salisbury' link='https://steamcommunity.com/sharedfiles/filedetails/?id=2016705263' />
            <Carousel className='img-carousel' axis='horizontal' infiniteLoop showStatus={false}>
                <div>
                    <img src={salisburyIngamePromo} />
                </div>
                <div>
                    <img src={salisburyIngameLong} />
                </div>
                <div>
                    <img src={salisburyIngameCt} />
                </div>
                <div>
                    <img src={salisburyIngameT} />
                </div>
                <div>
                    <img src={salisburyIngameSite} />
                </div>
                <div>
                    <img src={salisburyIngameTunnel} />
                </div>
                <div>
                    <img src={salisburyIngameTopdown} />
                </div>
            </Carousel>
        </div>
    )
}

export default PortfolioMisc
