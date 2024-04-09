"use client";

import { HeaderContainer, Nav, NavLink } from "./styles";

import React from "react";

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavLink href="/">Trang chủ</NavLink>
        <NavLink href="/about">Giới thiệu</NavLink>
        <NavLink href="/contact">Liên hệ</NavLink>
        <NavLink href="/Information">comment</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
