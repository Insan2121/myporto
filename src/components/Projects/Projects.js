import React from 'react';
import Link from 'next/link';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, TextButton } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Span } from '../Header/HeaderStyles';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <ExternalLinks href={p.visit}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            {/* <Link href="#Read more">
              <TextButton>Read more</TextButton>
            </Link> */}
            <br />
            {/* <ExternalLinks href={p.visit}>
              Read More
            </ExternalLinks> */}
            </ExternalLinks>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;