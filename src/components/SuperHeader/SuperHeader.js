import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => (
  <Wrapper>
    <MarketingMessage>
      Free shipping on domestic orders over $75!
    </MarketingMessage>
    {/* i 've created this wrapper in order to have 2 flex items in the correction  Josh solves that by setting margin-right: auto; on the wrapper and there is no need for that extra wrapper */}
    <FlexWrapper>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </FlexWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 0.875rem;
  height: 40px;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 32px;
  padding-right: 32px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
`;

//
const FlexWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
