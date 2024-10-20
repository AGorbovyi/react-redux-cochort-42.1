import { createAppSlice } from "store/createAppSlice"

import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,

  reducers: create => ({
    addLikes: create.reducer((state: FeedbackInitialState) => {
      state.likes = ++state.likes
    }),
    addDislikes: create.reducer((state: FeedbackInitialState) => {
      state.dislikes = ++state.dislikes
    }),
    reset: create.reducer((state: FeedbackInitialState) => {
      ;(state.likes = 0), (state.dislikes = 0)
    }),
  }),

  selectors: {
    likes: (state: FeedbackInitialState) => {
      return state.likes
    },
    dislikes: (state: FeedbackInitialState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
