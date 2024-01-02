// use bind from classnames
import classNames from 'classnames/bind'

// use css
import styles from './explore.module.scss'

// use layout, component
import { LargeContent } from '~/layouts'
import { Filter } from '~/components'
import { CardMedium } from '~/components'

const cx = classNames.bind(styles)

function Explore() {
    return (
        <LargeContent>
            <Filter />
            <div className={(cx('content-container'))}>
                {/* list */}
                <CardMedium />
                <CardMedium />
                <CardMedium />
                <CardMedium />
                <CardMedium />
                <CardMedium />
                {/* end list */}
            </div>
        </LargeContent>
    )
}

export default Explore