import React from 'react'
import { Provider } from 'mobx-react'
import { StoryFn } from '@storybook/addons'

import RootStore from 'store'
import ClassCounterWithMobx from 'component/example/ClassCounterWithMobx'

const store = new RootStore()

export default {
  title: 'Example|ExampleGroup/ClassCounterWithMobx',
  decorators: [(story: StoryFn<JSX.Element>) => <Provider {...store}>{story()}</Provider>]
}

export const JustComponent = () => <ClassCounterWithMobx />

export const SetTo10 = () => {
  store.example.counter.value = 10
  return <ClassCounterWithMobx />
}
