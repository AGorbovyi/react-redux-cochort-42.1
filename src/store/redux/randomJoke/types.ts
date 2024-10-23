export interface RandomJoke {
  setup: string
  punchline: string
  id: string
}

export interface RandomJokeSliceInitialState {
  data: RandomJoke[]
  error: undefined | string
  isLoading: boolean
}
