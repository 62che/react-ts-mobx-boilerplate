import React from 'react'
import ClassCounter from './component/example/ClassCounter'
import ClassCounter2 from './component/example/ClassCounter2'
import FunctionalCounter from './component/example/FunctionalCounter'

import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'mobx-react'
import State from './state'

const state = new State()

const App: React.FC = () => {
  return (
    <Provider {...state}>
      <Router>
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
