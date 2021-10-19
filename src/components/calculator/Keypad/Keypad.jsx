import classes from './Keypad.module.scss';

const Keypad = ({heandlerClick, clear, backspace, calculate}) => {
  return (
    <div className={classes.keypad}>
      <div className={classes.lines}>
        <div className={classes.btn} onClick={backspace} id='backspace'>C</div>
        <button name='7' className={classes.btn} onClick={heandlerClick}>7</button>
        <button name='8' className={classes.btn} onClick={heandlerClick}>8</button>
        <button name='9' className={classes.btn} onClick={heandlerClick}>9</button>
        <button name='*' className={classes.btn} onClick={heandlerClick}>*</button>
      </div>
      <div className={classes.lines}>
        <button name='-' className={classes.btn} onClick={heandlerClick}>-</button>
        <button name='4' className={classes.btn} onClick={heandlerClick}>4</button>
        <button name='5' className={classes.btn} onClick={heandlerClick}>5</button>
        <button name='6' className={classes.btn} onClick={heandlerClick}>6</button>
        <button name='/' className={classes.btn} onClick={heandlerClick}>\</button>
      </div>
      <div className={classes.lines}>
        <button name='+' className={classes.btn} onClick={heandlerClick}>+</button>
        <button name='1' className={classes.btn} onClick={heandlerClick}>1</button>
        <button name='2' className={classes.btn} onClick={heandlerClick}>2</button>
        <button name='3' className={classes.btn} onClick={heandlerClick}>3</button>
        <button name='=' className={classes.btn} onClick={calculate}>=</button>
      </div>
      <div className={classes.lines}> 
        <button name='.' className={classes.btn} onClick={heandlerClick}>.</button>
        <button name='(' className={classes.btn} onClick={heandlerClick}>(</button>
        <button name='0' className={classes.btn} onClick={heandlerClick}>0</button>
        <button name=')' className={classes.btn} onClick={heandlerClick}>)</button>
        <button className={classes.btn} onClick={clear} id='clear'>CE</button>
      </div>
    </div >
  )
}

export default Keypad;