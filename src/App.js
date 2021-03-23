import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [portfolioPage, setPortfolioPage] = useState("")

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <Router>
      <div className="App">
        <Header darkTheme={darkTheme} toggleDarkTheme={toggleDarkTheme}/>
        <div className='body'>
          <Route path='/' exact component={About} />
          <Route path='/portfolio' exact>
            <Portfolio page={portfolioPage} setPortfolioPage={setPortfolioPage} />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
