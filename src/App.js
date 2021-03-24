import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Scrollbars } from 'rc-scrollbars';

import meWaterfall from './res/me_waterfall.jpg'

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [portfolioPage, setPortfolioPage] = useState("code")

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const bgImageStyle = {
    backgroundImage: `url(${meWaterfall})`,
    backgroundAttachment: 'fixed',
    minWidth: '100%',
    minHeight: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'blur(10px)',
    transform: 'scale(1.03)',
    zIndex: '-5',
    position: 'fixed',
    border: '1px solid red'
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
              <Portfolio page={portfolioPage} setPortfolioPage={setPortfolioPage} />
            </Route>
          </div>
        </div>
    </Router>
  );
};

export default App;
