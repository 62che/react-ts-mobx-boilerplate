import CounterState from './example/counter'

export default class RootState {
  counter: CounterState

  constructor() {
    this.counter = new CounterState(this)
  }
}
