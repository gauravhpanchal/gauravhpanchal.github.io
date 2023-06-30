import Gaurav_Resume from "./Gaurav_Panchal_Resume.pdf";
import styled from "styled-components"
import { Button } from "./ResumeElements";
export const Resume2 = () => {
    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/1IXncN2l--by_B3-ANHbsHAIRIiEARqKy/view"
        );
      }

      return (
        <div>
          <a
            href={Gaurav_Resume}
            download="Gaurav_Panchal_Resume_30-06-2023-12-25-44"
          >
            <Button
              onClick={openResume}
              className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg"
            >
              Resume
            </Button>
          </a>
        </div>
      );
}