import React, { Component } from 'react'
import './App.scss'
import { Router, Switch, Route, NavLink, Redirect } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'
import history from './History/history'

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  render() {
    return (
      <Router history={history}>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName={'wfm-active'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/cars'>Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <div>
          <p>is logged in {this.state.isLoggedIn ? 'true' : 'false'}</p>

          <button onClick={() => this.setState({ isLoggedIn: true })}>
            Log in
          </button>
        </div>

        <hr />
        <Switch>
          <Route path='/' exact render={() => <h1>Home page</h1>} />
          {/* эмуляция логина */}
          {this.state.isLoggedIn && <Route path='/about' component={About} />}
          <Route path='/cars/:name' component={CarDetail} />
          <Route path='/cars' component={Cars} />
          <Redirect to={'/'} />
          {/* 404 идет последней */}
          {/* <Route
            render={() => (
              <h1 style={{ color: 'red', fontSize: '20px' }}>404</h1>
            )}
          /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
