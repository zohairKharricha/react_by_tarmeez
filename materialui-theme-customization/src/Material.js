import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {deepOrange, deepPurple} from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";

export default function ColorButtons() {
  const label = {inputProps: {"aria-label": "Checkbox demo"}};
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          // style={{backgroundColor: "#009688", color: "#fff"}}
          variant="contained"
          onClick={() => {
            alert();
          }}
          color="primary"
        >
          Primary
        </Button>
        <Button variant="outlined" color="success" size="large">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Checkbox {...label} />
        <Slider aria-label="Volume" />
      </Stack>

      <Chip label="primary" color="primary" variant="outlined" />
      <Chip label="success" color="success" variant="contained" />

      {/* <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
        <Avatar sx={{bgcolor: deepPurple[500]}}>OP</Avatar>
      </Stack> */}
    </>
  );
}
