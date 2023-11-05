import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import {deepOrange, deepPurple} from "@mui/material/colors";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{backgroundColor: "#009688", color: "#fff"}}
        onClick={() => {
          alert();
        }}
        color="secondary"
      >
        Secondary
      </Button>
      <Button variant="contained" color="success" size="large">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>

    // <Stack direction="row" spacing={2}>
    //   <Avatar>H</Avatar>
    //   <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
    //   <Avatar sx={{bgcolor: deepPurple[500]}}>OP</Avatar>
    // </Stack>
  );
}
