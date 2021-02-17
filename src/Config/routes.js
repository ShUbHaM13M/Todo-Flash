import Home from '../Pages/Home'
import AuthPage from '../Pages/UserAuth'
import Projects from '../Pages/Projects'
import Project from '../Pages/Project';

const routes = [
    {
        component: AuthPage,
        path: '/auth',
        isPrivate: false
    },
    {
        component: Project,
        path: '/projects/:id',
        isPrivate: true
    },
    {
        component: Projects,
        path: '/projects',
        isPrivate: true,
    },
    {
        component: Home,
        path: '/',
        isPrivate: false,
        exact: true
    },
]

export default routes;