import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"
import { CatFact } from "store/redux/catFact/types"
import {
  catFactSliceActions,
  catFactSliceSelectors,
} from "store/redux/catFact/catFactSlice"

import Button from "components/Button/Button"

import {
  PageWrapper,
  CatFactCard,
  CatFactText,
  CatFactWrapper,
  CatFactsContainer,
  ButtonControl,
} from "./styles"

function Lesson_17() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    catFactSliceSelectors.catFacts,
  )
  const getCatFact = () => {
    dispatch(catFactSliceActions.getCatFact())
  }

  const catFacts = data.map((catFact: CatFact, index: number) => {
    return <CatFactText key={catFact.id}>{catFact.fact}</CatFactText>
  })

  useEffect(() => {
    if(error) {
      alert(error)
    }
  }, [error]);
  return (
    <PageWrapper>
      <CatFactCard>
        <CatFactsContainer>{data.length > 0 && catFacts}</CatFactsContainer>
        <ButtonControl>
          <Button disabled={isLoading} name="Get Cat Fact" onClick={getCatFact} />
        </ButtonControl>
      </CatFactCard>
    </PageWrapper>
  )
}

export default Lesson_17
