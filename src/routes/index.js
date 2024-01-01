// use react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// use pages
import { Home } from '~/pages'
import { Following } from '~/pages'
import { Explore } from '~/pages'
import { Live } from '~/pages'
import { Profile } from '~/pages'
import { Upload } from '~/pages'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    }, {
        path: '/following',
        element: <Following />
    }, {
        path: '/explore',
        element: <Explore />
    }, {
        path: '/live',
        element: <Live />
    }, {
        path: '/profile',
        element: <Profile />
    }, {
        path: '/upload',
        element: <Upload />
    },

])

const Provider = <RouterProvider router={router} />

export { Provider }