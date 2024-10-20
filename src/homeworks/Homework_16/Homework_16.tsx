import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import Feedback from "components/Feedback/Feedback"

import { PageWrapper, FeedbackContainer } from "./styles"

function Homework_16() {
  const dispatch = useAppDispatch()
  const likes = useAppSelector(feedbackSliceSelectors.likes)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)

  const onLike = () => {
    dispatch(feedbackSliceActions.addLikes())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.addDislikes())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.reset())
  }

  return (
    <PageWrapper>
      <FeedbackContainer>
        <Feedback
          likes={likes}
          dislikes={dislikes}
          onLike={onLike}
          onDislike={onDislike}
          resetResults={resetResults}
        />
      </FeedbackContainer>
    </PageWrapper>
  )
}

export default Homework_16
