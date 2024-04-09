import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
`;

export const Nav = styled.nav`
  margin-top: 10px;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }
`;
