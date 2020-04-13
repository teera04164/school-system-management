import React, { Component } from 'react';
import Dashboard from '../src/Containers/Dashboard'
import SectionYear from './Containers/SectionYear'
// import CreateSection from './Containers/Create'
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom'

class App extends Component {
  renderRouter() {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/sectionYear" component={SectionYear} />
          {/* <Route exact path="/sectionYear/create" component={CreateSection} /> */}
          {/* <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
          <Route component={NotFound} /> */}
        </Switch>
      </Router>
    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;