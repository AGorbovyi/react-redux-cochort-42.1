export interface RandomJoke {
  id: string
  setup: string
  punchline: string
}

export interface RandomJokeSliceInitialState {
  data: RandomJoke[]
  error: undefined | string
  isLoading: boolean
}
