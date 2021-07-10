import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import {ListTitle} from "../Technologies/TechnologiesStyles";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import {SiJava, SiJavascript, SiPython}  from "react-icons/si";
import {FaCode}  from "react-icons/fa";
const data = [
  { number: <ListTitle>JAVA</ListTitle>, text: <SiJava size="3rem"/> },
  { number: <ListTitle>C++</ListTitle>, text: <FaCode size="3rem"/> },
  { number: <ListTitle>JAVASCRIPT</ListTitle>, text: <SiJavascript size="3rem"/> },
  { number: <ListTitle>PYTHON</ListTitle>, text: <SiPython size="3rem"/> }
];

const Acomplishments = () => (
  <Section id="languages">
    <SectionTitle>Languages</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
          <BoxText>{card.number}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
