import RouterStore from './router'

import CounterStore from './example/counter'
import TodoStore from './example/todo'

export default class RootStore {
  router: RouterStore
  example: {
    counter: CounterStore
    todo: TodoStore
  }

  constructor() {
    this.router = new RouterStore()
    this.example = {
      counter: new CounterStore(this),
      todo: new TodoStore(this)
    }
  }
}
