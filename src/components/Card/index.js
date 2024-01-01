// use link element from react-router-dom
import { Link } from 'react-router-dom'

// use icon fromreact-icons
import { IconContext } from 'react-icons'
import { IoMusicalNote } from 'react-icons/io5'
import { IoHeart } from 'react-icons/io5'
import { RiMessage3Fill } from 'react-icons/ri'
import { FaBookmark } from 'react-icons/fa6'
import { PiShareFatFill } from 'react-icons/pi'

// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './video.module.scss'

const cx = classNames.bind(styles)

function Video({ isFollow }) {
    return (
        <div className={cx('card')}>
            <Link to='' className={cx('card__avatar')}>
                <img src={require('~/assets/imgs/user-avatar/namthien.jpg')} alt='User Avatar' />
            </Link>

            <div className={cx('card__content')}>
                <div className={cx('card__info', 'info')}>
                    <div className={cx('info__left-container')}>
                        <Link to='' className={cx('info__author', 'author')}>
                            <h3 className={cx('author__account-name')}>Nam Thiên</h3>
                            <h4 className={cx('author__name')}>Name bla bla</h4>
                        </Link>

                        <div className={cx('info__text')}>
                            <button type='button'>Xem thêm</button>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.&nbsp;
                                <Link to='' className={cx('info__hashtag')}>#blabla</Link>
                                <Link to='' className={cx('info__hashtag')}>#abcxsy</Link>
                            </p>
                        </div>

                        <Link to='' className={cx('info__music')}>
                            <IconContext.Provider value={{ className: cx('info__music-icon') }}>
                                <IoMusicalNote />
                            </IconContext.Provider>
                            <p >Tò Te Tí - Wren Evans</p>
                        </Link>
                    </div>

                    {
                        !isFollow && (
                            <div className={cx('info__right-container')}>
                                <button type='button'>Theo dõi</button>
                            </div>
                        )

                    }

                </div>

                <div className={cx('card__video-div', 'video-div')}>
                    <Link to='' className={cx('video-div__video-container')}>
                        <video controls>
                            <source src={require('~/assets/vids/meo.mp4')} type='video/mp4'></source>
                            Your browser does not support the video tag.
                        </video>
                    </Link>

                    <div className={cx('video-div__action-panel')}>
                        <button className={cx('video-div__action-item')} type='button'>
                            <span className={cx('video-div__action-span')}>
                                <IconContext.Provider value={{ className: cx('video-div__action-icon') }}>
                                    <IoHeart />
                                </IconContext.Provider>
                            </span>
                            <p className={cx('video-div__action-numbers')}>123k</p>
                        </button>

                        <button className={cx('video-div__action-item')} type='button'>
                            <span className={cx('video-div__action-span')}>
                                <IconContext.Provider value={{ className: cx('video-div__action-icon') }}>
                                    <RiMessage3Fill />
                                </IconContext.Provider>
                            </span>
                            <p className={cx('video-div__action-numbers')}>123k</p>
                        </button>

                        <button className={cx('video-div__action-item')} type='button'>
                            <span className={cx('video-div__action-span')}>
                                <IconContext.Provider value={{ className: cx('video-div__action-icon') }}>
                                    <FaBookmark />
                                </IconContext.Provider>
                            </span>
                            <p className={cx('video-div__action-numbers')}>123k</p>
                        </button>

                        <button className={cx('video-div__action-item')} type='button'>
                            <span className={cx('video-div__action-span')}>
                                <IconContext.Provider value={{ className: cx('video-div__action-icon') }}>
                                    <PiShareFatFill />
                                </IconContext.Provider>
                            </span>
                            <p className={cx('video-div__action-numbers')}>123k</p>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Video