import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import About from './components/About'
// import Contact from './components/Contact'
import Home from './components/Home'
import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
