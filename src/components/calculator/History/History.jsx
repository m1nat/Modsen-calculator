import ItemHistory from './ItemHistory/ItemHistory';

import classes from './History.module.scss';


const History = ({ item }) => {
  return (
    <div className={classes.history}>
      {item.map(el => 
        <ItemHistory el={el} />)}
    </div>
  )
}

export default History;