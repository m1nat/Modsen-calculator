import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__logo}>Calculator App</div>
      <div className={classes.header__wrapperLink}>
        <div className={classes.homeLink}>
          <Link to='/calc'>
            Home
          </Link>
        </div>
        <div className={classes.settingsLinks}>
          <Link to='/control-panel'>
            Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;