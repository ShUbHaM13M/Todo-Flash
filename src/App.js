import './css/App.css';
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from './Config/routes'
import AppRoutes from './Components/Utils/AppRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          {routes.map((route, index) => (
            <AppRoutes
              key={index}
              component={route.component}
              path={route.path}
              exact={route.exact === true ? true : false }
              isPrivate={route.isPrivate} 
              />
          ))}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
