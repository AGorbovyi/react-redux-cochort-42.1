import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counter/counterSlice"

import Counter from "components/Counter/Counter"

import { PageWrapper } from "./styles"

function Lesson_16() {
  //Вызов useAppDispatch создает функцию dispatch.
  // Функция dispatch принимает в качестве аргумента action и доставляет его в store,
  // чтобы вызвать определенный reducer.
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSliceSelectors.count)

  const onPlus = () => {
    // тут будем диспатчить action для редьюсера plus
    const action = counterSliceActions.plus()
    console.log(action)
    dispatch(action)
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide(5))
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3))
  }

  return (
    <PageWrapper>
      <Counter
        count={count}
        onDivide={onDivide}
        onMultiply={onMultiply}
        onMinus={onMinus}
        onPlus={onPlus}
      />
    </PageWrapper>
  )
}

export default Lesson_16
