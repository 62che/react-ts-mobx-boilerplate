import { RouterStore } from 'mobx-react-router'
import CounterState from './example/counter'
import TodoState from './example/todo'

export default class RootState {
  router: RouterStore
  counter: CounterState
  todo: TodoState

  constructor() {
    this.router = new RouterStore()
    this.counter = new CounterState(this)
    this.todo = new TodoState(this)
  }
}
