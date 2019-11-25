import React from 'react'
import ClassComponent from './component/example/ClassCounter'
import ClassComp2 from './component/example/ClassCounter2'
import FuncComp from './component/example/FunctionalCounter'

import { Provider } from 'mobx-react'
import State from './state'

const state = new State()

const App: React.FC = () => {
  return (
    <Provider {...state}>
      <div>Hello, world!</div>
      <ClassComponent initial={1} />
      <ClassComp2 />
      <FuncComp />
    </Provider>
  )
}

export default App
