// use components, layouts
import { Default } from '~/layouts'
import { Card } from '~/components'

function Home() {
    return (
        <Default>
            {/* list */}
            <Card />
            <Card />
            <Card />
            {/* end list */}
        </Default>
    )
}

export default Home