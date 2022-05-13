import React, { ReactNode } from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return <Container>{children}</Container>;
}

export default AppLayout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const MainLayout = styled.div`
//   width: 100%;
//   max-width: ${({ theme }) => theme.breakPoint.mobile}px;
//   background-color: ${({ theme }) => theme.colors.layoutBackground};
// `;
