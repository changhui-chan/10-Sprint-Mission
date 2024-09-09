import {ReactComponent as Logo} from 'assets/imgs/logo_sm.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import {ReactComponent as UserIcon} from 'assets/imgs/user_icon.svg';
import { useState } from 'react';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
      <header className={styles['header']}>
        {isLogin ?
          <div className={styles['header-container']}>
            <Link to="/"><Logo/></Link>
            <nav className={styles['header-nav']}>
              <NavLink 
                to="/free"
                className={({ isActive }) =>
                  isActive ? `${styles['nav-link']} ${styles['active']}` : styles['nav-link']
                } 
              >
                자유게시판
              </NavLink>
              <NavLink 
                to="/items"
                className={({ isActive }) =>
                  isActive ? `${styles['nav-link']} ${styles['active']}` : styles['nav-link']
                }
              >
                중고마켓
              </NavLink>
            </nav>
            <UserIcon className={styles['user-icon']}/>
          </div>
          :
          <div className={styles['header-container']}>
            <Link to="/"><Logo/></Link>
            <button>로그인</button>
          </div>
        }
      </header>
  );
}

export default Header;