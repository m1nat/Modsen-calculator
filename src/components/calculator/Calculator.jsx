import classes from './Calculator.module.scss';
import Display from './Display/Display';
import History from './History/History';
import Keypad from './Keypad/Keypad';

const Calculator = ({result, heandlerClick, clear, backspace, calculate, item}) => {
  return(
    <div className={classes.calculator} >
      <div className={classes.majorSize}>
        <Display result={result}/>
        <Keypad heandlerClick={heandlerClick} clear={clear} backspace={backspace} calculate={calculate}/>
      </div>
      <div className={classes.supportSize}>
        <h3>History</h3>
        <History item={item}/>
      </div>
    </div>
  )
}

export default Calculator;