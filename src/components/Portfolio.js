import '../styles/Portfolio.css';
import PortfolioCode from './PortfolioCode';
import PortfolioFilmVideo from './PortfolioFilmVideo';
import PortfolioPhoto from './PortfolioPhoto';
import PortfolioMisc from './PortfolioMisc';
import PortfolioCategoryPicker from './PortfolioCategoryPicker';

const Portfolio = ({ page, setPortfolioPage }) => {
    //const location = useLocation();
    const slectPage = (pg) => {
        switch(pg) {
            case 'code':
                return (<PortfolioCode/>);
                break;
            case 'film-video':
                return (<PortfolioFilmVideo/>);
                break;
            case 'photo':
                return (<PortfolioPhoto/>);
                break;
            case 'misc':
                return (<PortfolioMisc/>);
                break;
            default:
                return;
        }
    }

    return (
        <div className='portfolio'>
            <PortfolioCategoryPicker page={page} setPortfolioPage={setPortfolioPage} />
            {slectPage(page)}
        </div>
        
    )
}

export default Portfolio
