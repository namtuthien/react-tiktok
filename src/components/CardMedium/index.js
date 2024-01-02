// use link element from react-router-dom
import { Link } from 'react-router-dom'

// use icon from react-icons
import { IconContext } from 'react-icons'
import { FaRegHeart } from "react-icons/fa"

// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './card-medium.module.scss'

const cx = classNames.bind(styles)

function CardMedium() {
    return (
        <div className={cx('card')}>
            <Link to='' className={cx('card__video')}>
                <video controls>
                    <source src={require('~/assets/vids/meo.mp4')} type='video/mp4'></source>
                    Your browser does not support the video tag.
                </video>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Link>

            <div className={cx('card__bottom-container')}>
                <div className={cx('card__user')}>
                    <img src={require('~/assets/imgs/user-avatar/namthien.jpg')} alt='User Avatar' />
                    <p>Nam Thiên</p>
                </div>

                <div className={cx('card__love-btn')}>
                    <IconContext.Provider value={{ className: cx('card__icon') }}>
                        <FaRegHeart />
                    </IconContext.Provider>
                    <p>123k</p>
                </div>
            </div>
        </div >
    )
}

export default CardMedium