import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div className="faq">
      <div className="content">
        <div className="flex">
          <div className="left">
            <div className="dday">Faq</div>
            <div className="text">
              <h2>
                Got Questions?
                <br /> We've Got Answers!
              </h2>
              <p>
                Find answers to commonly asked questions about our community,
                what we do, and how to make become one of us.
              </p>
            </div>
            <div className="accord">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  When is TECHFEST’24?
                </AccordionSummary>
                <AccordionDetails>
                 TECHFEST'24 is scheduled to happen JUNE 29TH 2024.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Where is the venue for TECHFEST’24?
                </AccordionSummary>
                <AccordionDetails>
                  The venue for TECHFEST'24 is Faculty of ICT Auditorium, Kwara State University, Malete, Nigeria.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  Is TECHFEST’24 a physical or virtual event?
                </AccordionSummary>
                <AccordionDetails>
                  TECHFEST'24 is a physical event.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  How can I register to attend TECHFEST’24?
                </AccordionSummary>
                <AccordionDetails>
                  You can register by clicking this link: <Link to='https://bit.ly/gdsckwasu-techfest24'>https://bit.ly/gdsckwasu-techfest24</Link>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  Is sponsorship still open for TECHFEST’24
                </AccordionSummary>
                <AccordionDetails>
                 Yes, you can still become a sponsor for TECHFEST'24. Click this link to apply: <Link to='https://bit.ly/techfest24-CFP'>https://bit.ly/techfest24-CFP</Link>
                </AccordionDetails>
              </Accordion>
            </div>
            <Link className="reg" to="https://gdsc.community.dev/kwara-state-university/" >Have Other Questions?</Link>
            
          </div>
          <div className="right">
            <div className="dday">newsletter</div>
            <h2>Subscribe to Our Newsletter</h2>
            <p>
              Subscribe to our community newsletter to receive the latest
              updates and exclusive offers.
            </p>
            <div className="wrapper">
              <input type="email" name="" placeholder="Email Address" id="" />
              <button className="">&gt; </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
