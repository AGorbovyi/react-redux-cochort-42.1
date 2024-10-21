import { v4 } from "uuid"
import { createAppSlice } from "store/createAppSlice"

import { CatFact, CatFactSliceInitialState } from "./types"

const catFactInitialState: CatFactSliceInitialState = {
  data: [],
  error: undefined,
  isLoading: false,
}

export const catFactSlice = createAppSlice({
  name: "CAT_FACT",
  initialState: catFactInitialState,
  reducers: create => ({
    getCatFact: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        const CAT_FACT_API_URL: string = "https://catfact.ninja/fact"

        const respose = await fetch(CAT_FACT_API_URL)

        const result = await respose.json()

        if (respose.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: (state: CatFactSliceInitialState, action) => {
            state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: CatFactSliceInitialState, action) => {
            state.isLoading = false
            state.data = [...state.data, { id: v4(), fact: action.payload.fact}]
        },
        rejected: (state: CatFactSliceInitialState, action) => {
            state.isLoading = false
            state.error = "Some Network Error"
        },
      },
    ),
  }),
  selectors: {
    catFacts: (state: CatFactSliceInitialState) => state,
  },
})

export const catFactSliceActions = catFactSlice.actions

export const catFactSliceSelectors = catFactSlice.selectors
