import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import {useState} from "react";

export default function AccordionComponent() {
  const [checked, setChecked] = useState(true);
  const label = {inputProps: {"aria-label": "Switch demo"}};
  return (
    <Container maxWidth={"lg"}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Switch
                {...label}
                onChange={(event) => {
                  setChecked(event.target.checked);
                }}
                defaultChecked
              />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div
        style={{
          background: "orange",
          transition: "0.5s",
          height: checked ? "100px" : "500px",
        }}
      >
        <p>Hello World!</p>
      </div>
    </Container>
  );
}
