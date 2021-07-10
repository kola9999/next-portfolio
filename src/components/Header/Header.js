import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { BsAward } from "react-icons/bs";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <BsAward size="4rem" /> <span>Reddy Nagendra Kola</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#languages">
          <NavLink>Languages</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/kola9999">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/reddy-nagendra-kola-866306110/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.hackerrank.com/kolanagendra03">
        <FaHackerrank size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
