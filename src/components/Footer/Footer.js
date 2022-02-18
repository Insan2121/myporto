import React from 'react';
import { AiFillBehanceCircle, AiFillDribbbleCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hello.insanz@gmail.com">
          hello.insanz@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://medium.com/@insan_pratama">
            <AiFillMediumCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://dribbble.com/insan_pratama">
            <AiFillDribbbleCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.behance.net/insan_nurzaman">
            <AiFillBehanceCircle size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
