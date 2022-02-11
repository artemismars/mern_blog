import Signup from './pages/Signup/signup'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/home'
import Notfound from './pages/NotFound/notfound'
import Edit from './pages/Edit/edit'
import Post from './pages/Post/post'
import Detail from './pages/Detail/detail'

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
        <Route path="/p/:username">
          <Dashboard />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route path="/">
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
