import React, { Component } from 'react'
import { observable, action, computed } from 'mobx'
import { observer } from 'mobx-react'

import { delay } from 'lib/util'

interface Props {
  initial: number
}

interface State {
  value: number
}

@observer
export default class ClassCounter extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  // }

  @observable value = this.props.initial

  @computed get doubledValue() {
    return this.value * 2
  }

  @action increase = (v: number) => (this.value += v)

  @action decrease = () => this.value--

  @action delayedIncrease = async () => {
    await delay(1000)
    this.increase(1)
  }

  render() {
    return (
      <div>
        <h1>{this.value}</h1>
        <h1>{this.doubledValue}</h1>
        <button onClick={() => this.increase(1)}>+</button>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.delayedIncrease}>*</button>
      </div>
    )
  }
}
