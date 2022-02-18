import Link from 'next/link';
import React from 'react';
import { AiFillBehanceCircle, AiFillDribbbleCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';
import { DiAtom, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: "20px" }}>
          <DiAtom size="3rem" /> <Span>Insan</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://medium.com/@insan_pratama">
          <AiFillMediumCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://dribbble.com/insan_pratama">
          <AiFillDribbbleCircle size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.behance.net/insan_nurzaman">
          <AiFillBehanceCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
