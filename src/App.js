import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PortfolioCategoryPicker from './components/PortfolioCategoryPicker';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import meWaterfall from './res/bg/me_waterfall.jpg'
import puertorico from './res/bg/puertorico.jpg'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [portfolioPage, setPortfolioPage] = useState("code")

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const bgImages = {
    code: meWaterfall,
    "film-video": puertorico,
    photo: puertorico,
    misc: meWaterfall
  }

  const bgImageStyle = {
    backgroundImage: `url(${bgImages[portfolioPage]})`,
    backgroundAttachment: 'fixed',
    minWidth: '100%',
    minHeight: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'blur(10px)',
    transform: 'scale(1.03)',
    zIndex: '-5',
    position: 'fixed'
  }

  return (
    <Router>
        <div style={bgImageStyle} ></div>
        <div className="App" >
          <Header className='header' darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme}/>
          <div className='body'>
            <Route path='/' exact component={About} />
            <Route path='/portfolio' exact>
              <h1 className='portfolio-header' >Portfolio</h1>
              <div className='picker'>
                <PortfolioCategoryPicker page={portfolioPage} setPortfolioPage={setPortfolioPage} /> 
              </div>
              <Portfolio page={portfolioPage} />
            </Route>
          </div>
        </div>
    </Router>
  );
};

export default App;
