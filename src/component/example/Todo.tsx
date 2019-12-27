import React, { useState } from 'react'
import { observer } from 'mobx-react'

import { useStore } from 'lib/hook'
import RootStore from 'store'
import TodoStore from 'store/example/todo'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  default: {},
  done: {
    textDecorationLine: 'line-through'
  }
})

const Todo: React.FC = observer(() => {
  const store: RootStore = useStore()
  const todo: TodoStore = store.example.todo

  const [name, setName] = useState('')
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const styles = useStyles()

  const onInsert = () => {
    if (!name) return
    todo.insert(name)
    setName('')
  }

  return (
    <div>
      <div>
        <h1>Todo</h1>
        <input type="text" value={name} onChange={onChangeName} />
        <button onClick={onInsert}>Add</button>
      </div>
      <ul>
        {todo.todos.map(t => {
          return (
            <li key={t.id} className={t.done ? styles.done : styles.default}>
              {t.id}&nbsp;
              {t.name}&nbsp;
              <button onClick={() => todo.toggle(t.id)}>v</button>&nbsp;
              <button onClick={() => todo.remove(t.id)}>x</button>&nbsp;
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default Todo
