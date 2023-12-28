// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './home.module.scss'

// use components, layouts
import { Default } from '~/layouts'
import { Video } from '~/components'

const cx = classNames.bind(styles)

function Home() {
    return (
        <Default>
            <main className={cx('main-container')}>
                {/* list */}
                <Video />
                <Video />
                <Video />
                {/* end list */}
            </main>
        </Default>
    )
}

export default Home