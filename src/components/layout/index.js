import { memo, useContext } from "react";
import Header from "../header";
import styled from "styled-components";
import { LayoutContext } from "../../contexts/layout";
import measurements from "../../shared/measurements";
import time from "../../shared/time";
import { AuthContext } from "../../contexts/auth";
import { SellerContext } from "../../contexts/seller";
import { ContentDirectionContext } from "../../contexts/contentDirection";

const Layout = ({ children }) => {
  const user = useContext(AuthContext);
  const { isSeller } = useContext(SellerContext);
  const { sidebarExpanded } = useContext(LayoutContext);

  const contentDirection = useContext(ContentDirectionContext);

  return (
    <StyledLayout dir={contentDirection}>
      <Header />

      <Main>
        <Wrapper
          seller={isSeller}
          sidebarExpanded={sidebarExpanded}
          contentDirection={contentDirection}
        >
          {children}
        </Wrapper>
      </Main>
    </StyledLayout>
  );
};

const StyledLayout = styled.div``;

const Wrapper = styled.div`
  max-width: ${({ seller }) =>
    seller
      ? measurements.maxWidth.wrapper
      : measurements.maxWidth.smallWrapper};
  margin: 0 auto;
  padding-left: ${({ seller, sidebarExpanded, contentDirection }) =>
    seller && contentDirection === "ltr"
      ? sidebarExpanded
        ? measurements.width.sidebar
        : measurements.width.sidebarCollapsed
      : null};
  padding-right: ${({ seller, sidebarExpanded, contentDirection }) =>
    seller && contentDirection === "rtl"
      ? sidebarExpanded
        ? measurements.width.sidebar
        : measurements.width.sidebarCollapsed
      : null};
  transition-property: padding-left, padding-right;
  transition-duration: ${time.transition.sidebar}s;
`;

const Main = styled.main``;

export default memo(Layout);
