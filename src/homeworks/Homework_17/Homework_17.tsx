import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"

import Button from "components/Button/Button"
import { RandomJoke } from "store/redux/randomJoke/types"
import {
  randomJokeSliceAction,
  randomJokeSliceSelectors,
} from "store/redux/randomJoke/randomJokeSlice"

import {
  PageWrapper,
  JokeCard,
  JokeContainer,
  JokeText,
  ButtonControl,
} from "./styles"

function Homework_17() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    randomJokeSliceSelectors.randomJoke,
  )
  const getRandomJoke = () => {
    dispatch(randomJokeSliceAction.getRandomJoke())
  }

  const deleteAllJokes = () => {
    dispatch(randomJokeSliceAction.deleteAllJokes())
  }

  // const deleteJoke = () => {
  //   dispatch(randomJokeSliceAction.deleteJoke())
  // }

  const randomJoke = data.map((randomJoke: RandomJoke, index: number) => {
    return (
      <JokeText key={randomJoke.id}>
        {randomJoke.setup} <br /> {randomJoke.punchline}
      </JokeText>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      {data.length > 0 && (
        <ButtonControl>
          <Button name="Delete All Jokes" onClick={deleteAllJokes} />
        </ButtonControl>
      )}
      <JokeCard>
        <JokeContainer>{data.length > 0 && randomJoke}</JokeContainer>
      </JokeCard>
      <ButtonControl>
        <Button
          disabled={isLoading}
          name="Get Random Joke"
          onClick={getRandomJoke}
        />
      </ButtonControl>
    </PageWrapper>
  )
}

export default Homework_17
