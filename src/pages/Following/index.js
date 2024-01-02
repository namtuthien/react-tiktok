// use layout, component
import { Default } from '~/layouts'
import { CardFull } from '~/components'

function Following() {
    return (
        <Default>
            <CardFull isFollow={true} />
            <CardFull isFollow={true} />
            <CardFull isFollow={true} />
        </Default>
    )
}

export default Following