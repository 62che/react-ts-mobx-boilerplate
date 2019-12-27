import RootStore from 'store'
import CounterStore from './counter'

describe('CounterStore', () => {
  let rootStore: RootStore
  let counter: CounterStore

  beforeEach(() => {
    rootStore = new RootStore()
    counter = rootStore.example.counter
  })

  it('initialValue', () => {
    expect(counter.value).toEqual(0)
  })

  it('after increase', () => {
    counter.increase(1)
    expect(counter.value).toEqual(1)
  })

  it('after delayedIncrease', async () => {
    await counter.delayedIncrease()
    expect(counter.value).toEqual(1)
  })
})
