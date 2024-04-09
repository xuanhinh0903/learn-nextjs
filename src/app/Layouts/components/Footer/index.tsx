"use client";

import { FooterContainer, FooterItem, FooterList } from "./styles";

import React from "react";

export function Footer() {
  return (
    <FooterContainer>
      <FooterList>
        <FooterItem>About Us</FooterItem>
        <FooterItem>Services</FooterItem>
        <FooterItem>Contact</FooterItem>
      </FooterList>
      <p>&copy; 2024. All rights reserved.</p>
    </FooterContainer>
  );
}
