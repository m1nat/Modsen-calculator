import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Calculator from './components/calculator/Calculator';
import ControlPanel from './components/calculator/Control-panel/Contror-panel';
import Header from './components/header/Header';

import classes from './styles/App.module.scss';

const App = () => {

  const getColor = () => localStorage.getItem('Color');
  document.body.style.backgroundColor = getColor();

  window.location.pathname == '/' ? window.location.href = '/calc' : console.log('Settings');

  const [result, setResult] = useState('');
  const [item, setHistory] = useState([]);

  const clearHistory = () => {
    setHistory([]);
  }

  const heandlerClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult('');
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(String(eval(result)).length > 3 &&
        String(eval(result)).includes('.')
        ? String(eval(result).toFixed(4))
        : String(eval(result))
      );
      setHistory([...item, { value: result }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/calc'>
          <Calculator
            result={result}
            heandlerClick={heandlerClick}
            backspace={backspace}
            clear={clear}
            calculate={calculate}
            item={item} />
        </Route>
        <Route path='/control-panel'>
          <ControlPanel
            clearHistory={clearHistory}
          />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
