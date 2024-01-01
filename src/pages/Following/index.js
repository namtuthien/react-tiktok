import { Default } from '~/layouts'
import { Card } from '~/components'

function Following() {
    return (
        <Default>
            <Card isFollow={true} />
            <Card isFollow={true} />
            <Card isFollow={true} />
        </Default>
    )
}

export default Following