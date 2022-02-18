import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Insan <br />
          UI/UX Designer
        </SectionTitle>
        <SectionText>
        I am a UX/UI designer based in Malang, Indonesia with strong 
        UI Design skills and a mind fixated on curiosity. 
        The most updated person on design and technology.
        </SectionText>
        <Button onClick={props.handleClick}>Get in touch on Linkedin</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;