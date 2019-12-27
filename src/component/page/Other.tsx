import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import { useStore } from 'lib/hook'
import RootStore from 'store'
import RouterStore from 'store/router'

import Todo from 'component/example/Todo'

const useStyles = makeStyles((theme: Theme) => {
  // console.log(theme)
  return createStyles({
    default: {
      boxShadow: 'inset 0 0 0 1px gray'
    }
  })
})

const Other: React.FC = () => {
  const store: RootStore = useStore()
  const router: RouterStore = store.router

  const styles = useStyles()

  const onClick = () => router.push('/')

  return (
    <Container className={styles.default}>
      <Button onClick={onClick} variant="contained">
        Button in Other
      </Button>
      <Todo />
      <Box bgcolor="primary.main" m={1} height="5em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="5em">
        Some Box
      </Box>
      <Box bgcolor="primary.main" m={1} height="5em">
        Some Box
      </Box>
    </Container>
  )
}

export default Other
