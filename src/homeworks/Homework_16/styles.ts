import styled from "@emotion/styled"
import { colors } from "styles/colors";
import GlobalStyles from "styles/GlobalStyles"

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${colors.PRIMARY};
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
