import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  gap: 20px;
  background-color: ${colors.PRIMARY};
`

export const JokeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 800px;
  min-height: 300px;
  max-height: 800px;
  padding: 40px 10px 40px 40px;
  border: 2px solid black;
  border-radius: 6px;
  background-color: white;
  overflow-y: auto;
`

export const JokeContainer = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`

export const JokeText = styled.li`
  font-size: 24px;
  font-weight: bold;
`

export const ButtonControl = styled.div`
  min-width: 800px;
`
