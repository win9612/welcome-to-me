import Link from "next/link";
import React from "react";
import { HeaderWrapper } from "./Header.styled";
import StyledLink from "../StyledLink";

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledLink href="/" label="Home" />
      <StyledLink href="/css-practice" label="CSS 연습" />
      <StyledLink href="/weather" label="날씨 앱" />
    </HeaderWrapper>
  );
};

export default Header;
