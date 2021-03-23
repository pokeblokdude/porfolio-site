import '../styles/Portfolio.css';
import PortfolioCode from './PortfolioCode';
import PortfolioCategoryPicker from './PortfolioCategoryPicker';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <PortfolioCategoryPicker />
            <PortfolioCode />
        </div>
    )
}

export default Portfolio
