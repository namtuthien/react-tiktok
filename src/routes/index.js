import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/following',
        element: <Following />
    },
    {
        path: '/upload',
        element: <Upload />
    },
])

const Provider = <RouterProvider router={router} />

export { Provider }