import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { GiVrHeadset, GiProcessor } from "react-icons/gi";
import { BiCloud } from "react-icons/bi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with wide range of domains like Wearable tech, web
      development, App development, Designing, Internet of Things, image
      processing, and Blockchain.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML, CSS, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs, php, SQL, and NOSQL Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma, AdobeXD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiVrHeadset size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Wearable Tech</ListTitle>
          <ListParagraph>
            Experience in designing wearable devices
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BiCloud size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Internet of things</ListTitle>
          <ListParagraph>
            Experience in IOT products, layers, architecture, and software
            design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiProcessor size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Image Processing</ListTitle>
          <ListParagraph>
            Experience in Image processing. Implemented image processing in Iot
            apps.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <SectionDivider />
  </Section>
);

export default Technologies;
