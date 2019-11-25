import { observable, action } from 'mobx'
import RootState from '../index'

interface Todo {
  id: number
  done: boolean
  name: string
}

export default class TodoState {
  root: RootState
  id: number

  @observable todos: Todo[];

  constructor(root: RootState) {
    this.root = root
    this.id = 1
    this.todos = [
      { id: 1, name: 'Sample', done: false }
    ]
  }

  @action insert = (name: string) => this.todos.push({ id: ++this.id, done: false, name })

  @action remove = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  @action toggle = (id: number) => {
    const todo = this.todos.find(todo => todo.id === id)!
    todo.done = !todo.done
  }
}
