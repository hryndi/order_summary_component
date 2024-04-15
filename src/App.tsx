import styled from "@emotion/styled";
import previewImg from "./assets/illustration-hero.svg";
import musicIcon from "./assets/icon-music.svg";

const Root = styled("div")(() => ({
  "--primary_bright_blue": "hsl(245, 75%, 52%)",
}));
const vars = {
  primary_bright_blue: "hsl(245, 75%, 52%)",
  primary_bright_blue_hover: "hsl(244, 82%, 65%)",
  neutral_desaturated_blue: "hsl(224, 23%, 55%)",
  primary_pale_blue: "hsl(220, 30%, 94%)",
  neutral_pale_blue: "hsl(225, 100%, 98%)",
  netural_dark_blue: "hsl(223, 47%, 23%)",

  fs_paragraph: "1rem",
  fw_regular: 600,
  fw_middle: 700,
  fw_bold: 900,

  ff_base: "Red Hat Display",
};

const StyledArticle = styled.article`
  color: ${vars.neutral_desaturated_blue};
  border-radius: 1.2rem;
  max-width: 375px;
  overflow: hidden;
`;
const StyledPreviewImage = styled.img`
  min-width: 100%;
  object-fit: cover;
`;

const StyledContentDiv = styled.div`
  background-color: ${vars.neutral_pale_blue};
  text-align: center;
  display: grid;
  gap: 1.5rem;
  padding: 1.55rem;
  /* padding-block: 2rem; */
`;

const StyledHeader = styled.h1`
  margin-top: 0.5rem;
  color: ${vars.netural_dark_blue};
  font-weight: ${vars.fw_bold};
`;

const StyledParagraph = styled.p`
  font-size: ${vars.fs_paragraph};
  font-weight: ${vars.fw_regular};
`;

const StyledPlanDiv = styled.div`
  background-color: ${vars.primary_pale_blue};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.8rem;
`;

const StyledGroupWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledMusicIcon = styled.img``;

const StyledPlanInfo = styled.div``;

const StyledPlanNameHeader = styled.h2`
  color: ${vars.netural_dark_blue};
  font-weight: ${vars.fw_bold};
  font-size: 1rem;
`;

const StyledPriceSpan = styled.span``;

const StyledChangeBtn = styled.button`
  color: var(--primary_bright_blue);
  font-weight: ${vars.fw_middle};
  text-decoration: underline;
  border: none;

  &:hover {
    /* Remove the space here */
    color: ${vars.primary_bright_blue_hover}; /* Use the variable here */
  }
`;

const StyledPaymentBtn = styled.button`
  background-color: var(--primary_bright_blue);
  color: #fff;
  box-shadow: 0px 10px 65px 0px rgba(0, 0, 0, 0.6);
  font-weight: ${vars.fw_bold};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 0.759rem;
  padding: 0.85rem;
  &:hover {
    /* Remove the space here */
    background-color: ${vars.primary_bright_blue_hover}; /* Use the variable here */
  }
`;

const StyledCancelBtn = styled.button`
  background-color: transparent;
  color: ${vars.neutral_desaturated_blue};
  font-size: 1.05rem;
  font-weight: ${vars.fw_bold};
  border: 0;
  &:hover {
    /* Remove the space here */
    color: ${vars.netural_dark_blue}; /* Use the variable here */
  }
`;

function App() {
  return (
    <Root>
      <StyledArticle>
        <StyledPreviewImage src={previewImg} />
        <StyledContentDiv>
          <StyledHeader>Order Summary</StyledHeader>
          <StyledParagraph>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </StyledParagraph>
          <StyledPlanDiv>
            <StyledGroupWrap>
              <StyledMusicIcon src={musicIcon} />
              <StyledPlanInfo>
                <StyledPlanNameHeader>Annual Plan</StyledPlanNameHeader>
                <StyledPriceSpan>$59.99/year</StyledPriceSpan>
              </StyledPlanInfo>
            </StyledGroupWrap>
            <StyledChangeBtn>Change</StyledChangeBtn>
          </StyledPlanDiv>
          <StyledPaymentBtn>Proceed to Payment</StyledPaymentBtn>
          <StyledCancelBtn>Cancel Order</StyledCancelBtn>
        </StyledContentDiv>
      </StyledArticle>
    </Root>
  );
}

export default App;
