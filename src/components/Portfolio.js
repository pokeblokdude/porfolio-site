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
            case 'film-video':
                return (<PortfolioFilmVideo/>);
            case 'photo':
                return (<PortfolioPhoto/>);
            case 'misc':
                return (<PortfolioMisc/>);
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
