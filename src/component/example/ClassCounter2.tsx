import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import CounterState from '../../state/example/counter'

interface Props {
  counter?: CounterState  // props로 전달되지 않고 inject되기 때문에 ? 필요
}

@inject('counter')
@observer
export default class ClassCounter2 extends Component<Props> {
  render() {
    const counter = this.props.counter! // 선언이 ?이기 때문에 ! assertion 필요

    return (
      <div>
        <h1>{counter.value}</h1>
        <h1>{counter.doubledValue}</h1>
        <button onClick={() => counter.increase(1)}>+</button>
        <button onClick={counter.decrease}>-</button>
        <button onClick={counter.delayedIncrease}>*</button>
      </div>
    )
  }
}
