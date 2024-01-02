// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './large-content.module.scss'

// use partials
import Header from '~/partials/Header'
import Sidebar from '~/partials/Sidebar'

const cx = classNames.bind(styles)

function LargeContent({ children }) {
    return (
        <>
            <Header />
            <div className={cx('layout-container')}>
                <Sidebar />
                <main className={cx('main-container')}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default LargeContent