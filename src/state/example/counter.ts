import { observable, action, computed } from 'mobx'
import { delay } from '../../lib/util'
import RootState from '../index'

export default class CounterState {
  root: RootState

  @observable value = 0;

  constructor(root: RootState) {
    this.root = root
  }

  @computed get doubledValue () {
    return this.value * 2
  }

  @action increase = (v: number) => (this.value += v)

  @action decrease = () => this.value--

  @action delayedIncrease = async () => {
    await delay(1000)
    this.increase(1)
  }
}
