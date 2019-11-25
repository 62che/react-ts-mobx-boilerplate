import React from 'react'
import ClassCounter from './component/example/ClassCounter'
import ClassCounter2 from './component/example/ClassCounter2'
import FunctionalCounter from './component/example/FunctionalCounter'

import { Link } from 'react-router-dom'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { syncHistoryWithStore } from 'mobx-react-router'

import { Provider } from 'mobx-react'
import State from './state'

const state = new State()

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, state.router)

const App: React.FC = () => {
  return (
    <Provider {...state}>
      <Router history={history}>
        <div>
          <ul>
            <li><Link to="/class-counter">Class Counter</Link></li>
            <li><Link to="/class-counter-2">Class Counter 2</Link></li>
            <li><Link to="/functional-counter">Functional Counter</Link></li>
          </ul>
        </div>

        <Route path="/class-counter" render={() => <ClassCounter initial={1} />} />
        <Route path="/class-counter-2" component={ClassCounter2} />
        <Route path="/functional-counter" component={FunctionalCounter} />
      </Router>
    </Provider>
  )
}

export default App
