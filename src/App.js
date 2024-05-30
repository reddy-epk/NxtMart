import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import Payment from './components/Payment'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/payment" component={Payment} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
