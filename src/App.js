import './css/App.css';
import Nav from './Components/Nav'
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from './Config/routes'
import AppRoutes from './Components/AppRoute';


function App() {
  return (
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
  );
}

export default App;
