import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => (
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  <header>
    <SuperHeader />
    <MainHeader>
      {/* In the correction Josh use the solution to create a new component Side it will be set to flex: 1; and so flex basis to 0 on both side of the nav so will consume all extra spacing and so nav will set to center */}
      <Side>
        <Logo />
      </Side>
      <Nav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </Nav>
      <Side />
    </MainHeader>
  </header>
);
const MainHeader = styled.div`
  /* padding top-bottom to VISUALLY align without giving up the baseline alignment between logo and nav */
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  height: 72px;
  display: flex;
  align-items: baseline;
`;

// This component is only used to center the nav not taking into acc the logo (logo is inside side comp with flex basis 0 and therefore is hypothetical size is 0;)
const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  /* below is solution to solve spacing between nav items */
  display: flex;
  gap: 48px;
  margin: 0 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  /* below was my solution for spacing nav items ==> more or less same behavior */
  /* margin: 0 24px; */

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
