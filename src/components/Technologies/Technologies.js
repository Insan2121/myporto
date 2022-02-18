import React from 'react';
import { DiAtlassian, DiAtom, DiBingSmall, DiBootstrap, DiCreativecommons, DiCreativecommonsBadge, DiCssTricks, DiDebian, DiEnvato, DiFirebase, DiFsharp, DiIllustrator, DiMarkdown, DiMeteor, DiPhotoshop, DiReact, DiResponsive, DiTravis, DiTrello, DiUikit, DiYeoman, DiYii, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="skills">
    <SectionDivider divider />
    <SectionTitle>Experienced Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>

    <List>
    <ListItem>
        <picture>
          <DiMeteor size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI Design</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiAtom size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Design System</ListTitle>
          <ListParagraph>
            Experience with <br />
            Atomic Design System Methodology
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiIllustrator size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>2D Illustration</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Adobe Illustrator
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiDebian size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>3D Illustration</ListTitle>
          <ListParagraph>
            Experience with <br />
            Blender
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiCreativecommons size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Motion Graphics</ListTitle>
          <ListParagraph>
            Experience with <br />
            After Effect
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiEnvato size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UX Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            User Experience Design
          </ListParagraph>
        </ListContainer>
      </ListItem>

      
    </List>
  </Section>
);

export default Technologies;
