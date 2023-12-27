import Header from '~/partials/Header'
import Sidebar from '~/partials/Sidebar'

function Default({ children }) {
    return (
        <>
            <Header />
            <main className='container'>
                <Sidebar />
                <div className="content">{children}</div>
            </main>
        </>
    )
}

export default Default