import React from "react";
import { PageWrapper } from "../components/Layout";
import { GlobalStyle } from "../components/GlobalStyle";
import { Content } from "../components/Layout";

export const Page = ({ title }) => (
  <PageWrapper>
    <GlobalStyle />
    <Content>
      <div style={{ padding: '2rem', fontFamily: 'Georgia, serif' }}>
        <h2>{title}</h2>
        <p>Content coming soon...</p>
      </div>
    </Content>
  </PageWrapper>
);