import Signup from './pages/Signup/signup'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/home'
import Notfound from './pages/NotFound/notfound'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
