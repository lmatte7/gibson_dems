import { PageHeader } from "../components/PageHeader";
import { Circle, IconRow } from "../components/Icons";
import { GlobalStyle } from "../components/GlobalStyle";
import { PageWrapper, Content, Left, Right } from "../components/Layout";
import { BrowserFrame, BrowserHeader, BrowserImage } from "../components/PageBrowser";
import { H1 } from "../components/Header";
import { ButtonGrid } from "../components/Button";
import { StyledLink, IconLink } from "../components/Link";

import { FaFacebookF, FaEnvelope } from "react-icons/fa";

export function HomePage() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Content>
        <Left>
          <PageHeader>Gibson County Democrats</PageHeader>
          <BrowserFrame>
            <BrowserHeader>
              <Circle />
              <Circle />
              <Circle />
            </BrowserHeader>
            <BrowserImage src="/af5c113015548faccef972fb4c94fb06.jpg" alt="Voting booth" />
          </BrowserFrame>
        </Left>
        <Right>
          <H1>
            Every Worker.<br />
            Every Family.<br />
            Every Voice.
          </H1>
          <ButtonGrid>
            <StyledLink target="blank" to="https://indems.org/run-for-office/">RUN FOR OFFICE</StyledLink>
            <StyledLink target="blank" to="https://www.facebook.com/share/1BXLaufx3r/?mibextid=wwXIfr">MEETINGS & EVENTS</StyledLink>
            <StyledLink target="blank" to="https://www.in.gov/sos/elections/voter-information/register-to-vote/">VOTER INFO</StyledLink>
            <StyledLink target="blank" to="https://secure.actblue.com/donate/gibson-dems">DONATE</StyledLink>
            <StyledLink target="blank" to="https://indems.org/">INDIANA DEMOCRATS</StyledLink>
            <StyledLink to="/contact">CONTACT DETAILS</StyledLink>
          </ButtonGrid>
          <IconRow>
            <IconLink href="https://www.facebook.com/people/Gibson-County-Democratic-Party/61557520996714/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </IconLink>
            <IconLink href="mailto:gibsondemocrats@gmail.com">
              <FaEnvelope />
            </IconLink>
          </IconRow>
        </Right>
      </Content>
    </PageWrapper>
  );
}