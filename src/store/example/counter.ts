import { observable, action, computed } from 'mobx'

import { delay } from 'lib/util'

import RootStore from '..'

export default class CounterStore {
  private rootStore: RootStore

  @observable value = 0

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @computed get doubledValue() {
    return this.value * 2
  }

  @action increase = (v: number) => (this.value += v)

  @action decrease = () => this.value--

  @action delayedIncrease = async () => {
    await delay(1000)
    this.increase(1)
  }
}
