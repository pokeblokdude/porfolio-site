import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
//import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  //const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <body>
          <Route path='/' exact component={About} />
          <Route path='/portfolio' component={Portfolio} />
        </body>
      </div>
    </Router>
  );
};

export default App;
