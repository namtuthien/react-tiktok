import Header from '~/partials/Header'
import Sidebar from '~/partials/Sidebar'

function Default({ children }) {
    return (
        <>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </>
    )
}

export default Default