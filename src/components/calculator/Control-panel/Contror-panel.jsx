import { useState } from 'react';
import classes from './Contror-panel.module.scss';

const ControlPanel = ({ clearHistory }) => {

  const setColor = (color) => localStorage.setItem('Color', color);
  const getColor = () => localStorage.getItem('Color');
  document.body.style.backgroundColor = getColor();

  return (
    <div className={classes.controlPanel}>
      <h2>Settings</h2>
      <div className={classes.select}>
        <p>Swith theme</p>
        <select className="form-select" onChange={event => {
          setColor(event.target.value);
          document.body.style.backgroundColor = getColor();
        }
        }>
          <option value="White">Light Theme</option>
          <option value="Gray">Dark Theme</option>
          <option value="Red">Colored Theme</option>
        </select>
      </div>
      <button type="button" className="btn btn-light" onClick={clearHistory}>Clear All History</button>
    </div>
  )
}

export default ControlPanel;