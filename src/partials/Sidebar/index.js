// use link element from react-router-dom 
import { Link, NavLink } from 'react-router-dom'

// use icon from react-icons
import { IconContext } from 'react-icons'
import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { MdOutlineExplore } from 'react-icons/md'
import { RiLiveLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    const isActive = true
    return (
        <nav className={cx('sidebar-container', 'sidebar')}>
            <div className={cx('sidebar__nav')}>
                <NavLink className={cx('sidebar__nav-item', isActive ? 'sidebar__active' : '')}>
                    <IconContext.Provider value={{ className: cx('sidebar__icon') }}>
                        <AiFillHome />
                    </IconContext.Provider>
                    <p>Dành cho bạn</p>
                </NavLink>

                <NavLink className={cx('sidebar__nav-item')}>
                    <IconContext.Provider value={{ className: cx('sidebar__icon') }}>
                        <FaUserFriends />
                    </IconContext.Provider>
                    <p>Đang theo dõi</p>
                </NavLink>

                <NavLink className={cx('sidebar__nav-item')}>
                    <IconContext.Provider value={{ className: cx('sidebar__icon') }}>
                        <MdOutlineExplore />
                    </IconContext.Provider>
                    <p>Khám phá</p>
                </NavLink>

                <NavLink className={cx('sidebar__nav-item')}>
                    <IconContext.Provider value={{ className: cx('sidebar__icon') }}>
                        <RiLiveLine />
                    </IconContext.Provider>
                    <p>Trực tuyến</p>
                </NavLink>

                <NavLink className={cx('sidebar__nav-item')}>
                    <IconContext.Provider value={{ className: cx('sidebar__icon') }}>
                        <CgProfile />
                    </IconContext.Provider>
                    <p>Hồ sơ</p>
                </NavLink>
            </div>

            <hr />

            <div className={cx('sidebar__following-group', 'following-group')}>
                <h3 className={cx('following-group__title')}>Theo dõi của bạn</h3>
                {/* list */}
                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>

                <NavLink className={cx('following-group__following-account', 'following-account')}>
                    <img className={cx('following-account__avatar')} src={require('~/assets/imgs/user-avatar/namthien.jpg')} />
                    <div className={cx('following-account__info')}>
                        <p className={cx('following-account__name')}>Nam Thiên</p>
                        <p className={cx('following-account__description')}>Description bla bla</p>
                    </div>
                </NavLink>
                {/* end list */}
                <button className={cx('following-group__more')} type='button'>Xem thêm</button>
            </div>

            <hr />

            <footer className={cx('footer-container', 'footer')}>
                <div>
                    <Link>About</Link>
                    <Link>Newsroom</Link>
                    <Link>Contact</Link>
                    <Link>Careers</Link>
                </div>

                <div>
                    <Link>TikTok for GoodAdvertise</Link>
                    <Link>TikTok LIVE Creator Networks</Link>
                    <Link>Developers</Link>
                    <Link>Transparency</Link>
                    <Link>TikTok Rewards</Link>
                    <Link>TikTok Embeds</Link>
                </div>

                <div>
                    <Link>Help</Link>
                    <Link>Safety</Link>
                    <Link>Terms</Link>
                    <Link>Privacy</Link>
                    <Link>Creator Portal</Link>
                    <Link>Community Guidelines</Link>
                </div>

                <div>
                    <Link>© 2023 TicToc</Link>
                </div>
            </footer>
        </nav >
    )
}

export default Sidebar