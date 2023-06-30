import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Box1, ContactWrapper, Outer } from "./ContactElements";
import { HiLocationMarker } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaMobileAlt,FaLinkedin,FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Outer>
            <Box1>
              <HiMail />
              <p>gauravhpanchal@gmail.com</p>
            </Box1>
            <Box1>
              <FaMobileAlt />
              <p>+91 8779059029</p>
            </Box1>
            <Box1>
              <HiLocationMarker />
              <p>Dombivali, Maharashtra</p>
            </Box1>
            <Box1 id="linkdin">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/gauravh-panchal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gaurav Panchal
              </a>
            </Box1>
            <Box1 id="github">
              <FaGithub />
              <a
                href="https://github.com/gauravhpanchal"
                target="_blank"
                rel="noopener noreferrer"
              >
                gauravhpanchal
              </a>
            </Box1>
          </Outer>
        </div>
        {/* <SocialIcon /> */}
      </div>
    </ContactWrapper>
  );
}

export default Contact;
