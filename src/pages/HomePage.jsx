import { PageHeader } from "../components/PageHeader";
import { Circle, IconRow } from "../components/Icons";
import { GlobalStyle } from "../components/GlobalStyle";
import { PageWrapper, Content, Left, Right } from "../components/Layout";
import { BrowserFrame, BrowserHeader, BrowserImage } from "../components/PageBrowser";
import { H1 } from "../components/Header";
import { ButtonGrid } from "../components/Button";
import { StyledLink } from "../components/Link";

import { FaFacebookF, FaEnvelope, FaPhone } from "react-icons/fa";

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
            <StyledLink to="/run-for-office">RUN FOR OFFICE</StyledLink>
            <StyledLink to="/meetings-events">MEETINGS & EVENTS</StyledLink>
            <StyledLink to="/voter-info">VOTER INFO</StyledLink>
            <StyledLink to="/donate">DONATE</StyledLink>
            <StyledLink to="/contact">CONTACT DETAILS</StyledLink>
            <StyledLink to="/indiana-democrats">INDIANA DEMOCRATS</StyledLink>
          </ButtonGrid>
          <IconRow>
            <FaFacebookF />
            <FaEnvelope />
            <FaPhone />
          </IconRow>
        </Right>
      </Content>
    </PageWrapper>
  );
}