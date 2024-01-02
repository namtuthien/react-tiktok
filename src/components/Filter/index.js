// use icons from react-icons
import { IconContext } from 'react-icons'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './filter.module.scss'

const cx = classNames.bind(styles)

function Filter() {
    return (
        <div className={cx('filter-container', 'filter')}>
            <div className={cx('filter__chevron', 'filter__chevron-left')}>
                <button className={cx('filter__chevron-btn')} type='button'>
                    <IconContext.Provider value={{ className: cx('filter__icon') }}>
                        <FaChevronLeft />
                    </IconContext.Provider>
                </button>
                <div className={cx('filter__shadow')}></div>
            </div>

            <div className={cx('filter__chevron', 'filter__chevron-right')}>
                <button className={cx('filter__chevron-btn')} type='button'>
                    <IconContext.Provider value={{ className: cx('filter__icon') }}>
                        <FaChevronRight />
                    </IconContext.Provider>
                </button>
                <div className={cx('filter__shadow')}></div>
            </div>

            <div className={cx('filter__btn-group')}>
                {/* list */}
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                <button className={cx('filter__btn')} type='button'>Hài kịch</button>
                {/* end list */}
            </div>
        </div>
    )
}

export default Filter