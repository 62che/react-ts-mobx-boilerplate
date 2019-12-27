import React from 'react'
import { observer } from 'mobx-react'

import { useStore } from 'lib/hook'
import RootStore from 'store'
import CounterStore from 'store/example/counter'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  default: {
    backgroundColor: 'black',
    color: 'white'
  }
})

const FunctionalCounter: React.FC = observer(() => {
  const store: RootStore = useStore()
  const counter: CounterStore = store.example.counter

  const styles = useStyles()

  return (
    <div>
      <h1>{counter.value}</h1>
      <h1>{counter.doubledValue}</h1>
      <Button onClick={() => counter.increase(1)} variant="contained" color="primary">
        +
      </Button>
      <Button onClick={counter.decrease} variant="outlined">
        -
      </Button>
      <Button onClick={counter.delayedIncrease} className={styles.default}>
        *
      </Button>
    </div>
  )
})

export default FunctionalCounter
