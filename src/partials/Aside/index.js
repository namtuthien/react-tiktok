// use link from react router dom
import { Link } from 'react-router-dom'

// use icon from react-icons
import { IconContext } from 'react-icons'
import { MdMoreHoriz } from 'react-icons/md'

// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './aside.module.scss'

const cx = classNames.bind(styles)

function Aside() {
    return (
        <aside className={cx('aside-container', 'aside')}>
            <div className={cx('aside__trends', 'trends', 'aside__item')}>
                <h1 className={cx('aside__title')}>Xu hướng cho bạn</h1>
                {/* list */}
                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARKTRACERS IN THE DARKTRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>

                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>

                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>

                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>

                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>

                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>

                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>

                <div className={cx('trends__item', 'item')}>
                    <Link to='' className={cx('item__content')}>
                        <p className={cx('item__title')}>TRACERS IN THE DARK</p>
                        <p className={cx('item__sub-title')}>123k videos</p>
                    </Link>

                    <button className={cx('item__more')} type='button'>
                        <IconContext.Provider value={{ className: cx('header__search-icon') }}>
                            <MdMoreHoriz />
                        </IconContext.Provider>
                    </button>
                </div>
                {/* end list */}
            </div>

            <div className={cx('aside__follow-recommend', 'follow-recommend', 'aside__item')}>
                <h1 className={cx('aside__title')}>Gợi ý theo dõi</h1>
                {/* list */}
                <div className={cx('follow-recommend__item')}>
                    <Link to='' className={cx('follow-recommend__item-link')}>
                        <div className={cx('follow-recommend__left-container')}>
                            <img src={cx(require('~/assets/imgs/user-avatar/namthien.jpg'))} alt='Nam Thiên' />
                        </div>

                        <div className={cx('follow-recommend__mid-container')}>
                            <p className={cx('item__title')}>Nam Thiên</p>
                            <p className={cx('item__sub-title')}>Name bla bla</p>
                        </div>
                    </Link>

                    <div className={cx('follow-recommend__right-container')}>
                        <button type='button'>Theo dõi</button>
                    </div>
                </div>

                <div className={cx('follow-recommend__item')}>
                    <Link to='' className={cx('follow-recommend__item-link')}>
                        <div className={cx('follow-recommend__left-container')}>
                            <img src={cx(require('~/assets/imgs/user-avatar/namthien.jpg'))} alt='Nam Thiên' />
                        </div>

                        <div className={cx('follow-recommend__mid-container')}>
                            <p className={cx('item__title')}>Nam ThiênNam ThiênNam Thiên</p>
                            <p className={cx('item__sub-title')}>Name bla bla</p>
                        </div>
                    </Link>

                    <div className={cx('follow-recommend__right-container')}>
                        <button type='button'>Theo dõi</button>
                    </div>
                </div>

                <div className={cx('follow-recommend__item')}>
                    <Link to='' className={cx('follow-recommend__item-link')}>
                        <div className={cx('follow-recommend__left-container')}>
                            <img src={cx(require('~/assets/imgs/user-avatar/namthien.jpg'))} alt='Nam Thiên' />
                        </div>

                        <div className={cx('follow-recommend__mid-container')}>
                            <p className={cx('item__title')}>Nam Thiên</p>
                            <p className={cx('item__sub-title')}>Name bla blaName bla blaName bla bla</p>
                        </div>
                    </Link>

                    <div className={cx('follow-recommend__right-container')}>
                        <button type='button'>Theo dõi</button>
                    </div>
                </div>

                <div className={cx('follow-recommend__item')}>
                    <Link to='' className={cx('follow-recommend__item-link')}>
                        <div className={cx('follow-recommend__left-container')}>
                            <img src={cx(require('~/assets/imgs/user-avatar/namthien.jpg'))} alt='Nam Thiên' />
                        </div>

                        <div className={cx('follow-recommend__mid-container')}>
                            <p className={cx('item__title')}>Nam Thiên</p>
                            <p className={cx('item__sub-title')}>Name bla bla</p>
                        </div>
                    </Link>

                    <div className={cx('follow-recommend__right-container')}>
                        <button type='button'>Theo dõi</button>
                    </div>
                </div>

                <div className={cx('follow-recommend__item')}>
                    <Link to='' className={cx('follow-recommend__item-link')}>
                        <div className={cx('follow-recommend__left-container')}>
                            <img src={cx(require('~/assets/imgs/user-avatar/namthien.jpg'))} alt='Nam Thiên' />
                        </div>

                        <div className={cx('follow-recommend__mid-container')}>
                            <p className={cx('item__title')}>Nam Thiên</p>
                            <p className={cx('item__sub-title')}>Name bla bla</p>
                        </div>
                    </Link>

                    <div className={cx('follow-recommend__right-container')}>
                        <button type='button'>Theo dõi</button>
                    </div>
                </div>
                {/* end list */}
            </div>
        </aside>
    )
}

export default Aside