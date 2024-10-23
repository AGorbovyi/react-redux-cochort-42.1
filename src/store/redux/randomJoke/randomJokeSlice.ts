import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"

import { RandomJokeSliceInitialState } from "./types"
import { create } from "domain"

const randomJokeInitialState: RandomJokeSliceInitialState = {
  data: [],
  error: undefined,
  isLoading: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RandomJoke",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJoke: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const RANDOM_JOKE_API_URL: string =
          "https://official-joke-api.appspot.com/random_joke"
        const respose = await fetch(RANDOM_JOKE_API_URL)
        const result = await respose.json()

        if (respose.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: RandomJokeSliceInitialState, action) => {
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: RandomJokeSliceInitialState, action) => {
          state.data = [
            ...state.data,
            {
              id: v4(),
              setup: action.payload.setup,
              punchline: action.payload.punchline,
            },
          ]
          state.isLoading = false
        },
        rejected: (state: RandomJokeSliceInitialState, action) => {
          state.error = "Some Network error"
          state.isLoading = false
        },
      },
    ),

    deleteAllJokes: create.reducer(() => randomJokeInitialState),

    // deleteJoke: create.reducer((state: RandomJokeSliceInitialState) => {}),
  }),

  selectors: {
    randomJoke: (state: RandomJokeSliceInitialState) => state,
  },
})

export const randomJokeSliceAction = randomJokeSlice.actions

export const randomJokeSliceSelectors = randomJokeSlice.selectors
