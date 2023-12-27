// use link element from react-router-dom 
import { Link } from 'react-router-dom'

// use icon from react-icons 
import { IconContext } from 'react-icons'
import { FaSearch, FaPlus } from 'react-icons/fa'
import { BiMessageDetail } from 'react-icons/bi'
import { RiNotification4Line } from 'react-icons/ri'

// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('header-container', 'header')}>
            <div className={cx('header__left-container')}>
                <Link to='/' className={cx('header__logo-link')}>
                    <img className={cx('header__logo')} src={require('~/assets/imgs/logo.png')} alt='Tiktok Logo' />
                </Link>
            </div>

            <div className={cx('header__mid-container')}>
                <div className={cx('header__search-bar')}>
                    <input className={cx('header__search-input')} type='text' placeholder='Tìm kiếm' />
                    <button type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <FaSearch />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>

            <div className={cx('header__right-container')}>
                <ul>
                    <li className={cx('header__upload')}>
                        <Link to='' className={cx('header__link')}>
                            <IconContext.Provider value={{ className: cx('header__upload-icon') }}>
                                <FaPlus />
                            </IconContext.Provider>
                            <p>Thêm video</p>
                        </Link>
                    </li>
                    <li className={cx('header__message')}>
                        <Link to='' className={cx('header__link')}>
                            <IconContext.Provider value={{ className: cx('header__message-icon') }}>
                                <BiMessageDetail />
                            </IconContext.Provider>
                        </Link>
                    </li>
                    <li className={cx('header__noti')}>
                        <button type='button'>
                            <IconContext.Provider value={{ className: cx('header__noti-icon') }}>
                                <RiNotification4Line />
                            </IconContext.Provider>
                        </button>
                    </li>
                    <li className={cx('header__avatar')}>
                        <button type='button'>
                            <img src={require('~/assets/imgs/user-avatar/namthien.jpg')} alt='User Avatar' />
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header