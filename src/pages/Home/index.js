// use components, layouts
import { Default } from '~/layouts'
import { CardFull } from '~/components'

function Home() {
    return (
        <Default>
            {/* list */}
            <CardFull />
            <CardFull />
            <CardFull />
            {/* end list */}
        </Default>
    )
}

export default Home