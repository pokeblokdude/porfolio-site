const PortfolioCategoryPicker = ({ page, setPortfolioPage }) => {
    return (
        <div className='portfolio-categories-container'>
            <li className='portfolio-categories-list'>
                <ul 
                    onClick={() => setPortfolioPage('code')}
                    style={page === 'code' ? {borderBottom: '2px solid black', marginBottom: '-2px'} : {}}
                >Code</ul>
                <ul 
                    onClick={() => setPortfolioPage('film-video')}
                    style={page === 'film-video' ? {borderBottom: '2px solid black', marginBottom: '-2px'} : {}}
                >Film & Video</ul>
                <ul 
                    onClick={() => setPortfolioPage('photo')}
                    style={page === 'photo' ? {borderBottom: '2px solid black', marginBottom: '-2px'} : {}}
                >Photo</ul>
                <ul 
                    onClick={() => setPortfolioPage('misc')}
                    style={page === 'misc' ? {borderBottom: '2px solid black', marginBottom: '-2px'} : {}}
                >Misc.</ul>
            </li>
        </div>
    )
}

export default PortfolioCategoryPicker
