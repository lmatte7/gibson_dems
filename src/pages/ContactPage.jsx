import { Right } from "../components/Layout";
import { PageWrapper, Content, Left } from "../components/Layout";
import { GlobalStyle } from "../components/GlobalStyle";
import { H2 } from "../components/Header";
import { IconRow } from "../components/Icons";
import { IconLink } from "../components/Link";
import { FaFacebookF, FaEnvelope } from "react-icons/fa";

export function ContactPage() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Content>
        <Left>
          <div style={{ padding: '2rem', fontFamily: 'Georgia, serif' }}>
            <H2>Contact Us</H2>
            <IconLink href="mailto:gibsondemocrats@gmail.com">
              <FaEnvelope />
            </IconLink>
          </div>


        </Left>
        <Right>
          <div style={{ padding: '2rem', fontFamily: 'Georgia, serif' }}>
            <H2>Follow us on social media:</H2>
            <IconRow>
              <IconLink href="https://www.facebook.com/people/Gibson-County-Democratic-Party/61557520996714/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </IconLink>
            </IconRow>
          </div>

        </Right>
      </Content>
    </PageWrapper >
  );
}