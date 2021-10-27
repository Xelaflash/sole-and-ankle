import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => (
  <Wrapper>
    <MainColumn>
      <Header>
        <Title>Running</Title>
        <Select
          label="Sort"
          value={sortId}
          onChange={(ev) => setSortId(ev.target.value)}
        >
          <option value="newest">Newest Releases</option>
          <option value="price">Price</option>
        </Select>
      </Header>
      <Spacer size={34} />
      {/* <ShoeGrid /> */}
    </MainColumn>
    <LeftColumn>
      <Breadcrumbs>
        <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
      </Breadcrumbs>
      <Spacer size={42} />
      <ShoeSidebar />
    </LeftColumn>
  </Wrapper>
);

const Wrapper = styled.div`
  /* border: solid green; */
  display: flex;
  flex-direction: row-reverse;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  /* border: solid red; */
  flex-basis: 248px;
  margin-top: 14px;
`;

const MainColumn = styled.div`
  /* border: solid yellow; */
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  label {
    display: inline-flex;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
