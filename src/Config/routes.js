import Home from '../Pages/Home'
import AuthPage from '../Pages/UserAuth'

const routes = [
    {
        component: Home,
        path: '/',
        isPrivate: false,
        exact: true,
    },
    {
        component: AuthPage,
        path: '/auth',
        isPrivate: false,
    }
]

export default routes;