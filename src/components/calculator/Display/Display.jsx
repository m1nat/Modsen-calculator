import classes from './Display.module.scss';

const Display = ({result}) => {
  return(
    <div className={classes.display}>
      {result}
    </div>
  )
}

export default Display;