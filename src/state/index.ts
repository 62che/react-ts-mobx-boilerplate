import { RouterStore } from 'mobx-react-router'
import CounterState from './example/counter'

export default class RootState {
  router: RouterStore
  counter: CounterState

  constructor() {
    this.router = new RouterStore()
    this.counter = new CounterState(this)
  }
}
