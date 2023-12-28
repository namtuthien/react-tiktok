// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './default.module.scss'

// use partials
import Header from '~/partials/Header'
import Sidebar from '~/partials/Sidebar'
import Aside from '~/partials/Aside'

const cx = classNames.bind(styles)

function Default({ children }) {
    return (
        <>
            <Header />
            <div className={cx('layout-container')}>
                <Sidebar />
                <div className={cx('content-container')}>
                    {children}
                    <Aside />
                </div>
            </div>
        </>
    )
}

export default Default