import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Reddy Nagendra Kola <br />
        </SectionTitle>
        <SectionText>
          I am an engineer with a passion to learn something new every day. I
          love to solve real-world problems with simple hardware and using the
          software. My area of interest is web development, IoT devices, and
          Blockchain. My curiosity about technology keeps me driving to learn
          and implement new technologies.
        </SectionText>
        <span>
          <Link href="https://drive.google.com/file/d/1SduQdwThlNjg7_G84TJMVR5ko5P-3Vi7/view?usp=sharing">
            <Button>
              <BsLink45Deg size="3rem" />
              My Resume
            </Button>
          </Link>
        </span>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
