import Button from "components/Button/Button"
import Counter from "components/Counter/Counter"
import Input from "components/Input/Input"

import {
  PageWrapper,
  ButtonContainer,
  InputContainer,
  CounterContainer,
} from "./styles"

function Homework_15() {
  return (
    <PageWrapper>
      <CounterContainer>
        <Counter 
        count={0}
        onMinus={}
        onPlus={}
        />
      </CounterContainer>
      <InputContainer>
        <Input
          id="input"
          name="input"
          placeholder="Enter something"
          label="Input"
        />
      </InputContainer>

      <ButtonContainer>
        <Button
          name="Button"
          onClick={() => {
            console.log("I am a button")
          }}
        />
      </ButtonContainer>
    </PageWrapper>
  )
}

export default Homework_15
