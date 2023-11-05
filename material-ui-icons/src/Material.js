// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import {deepOrange, deepPurple} from "@mui/material/colors";
// import Checkbox from "@mui/material/Checkbox";
// import Slider from "@mui/material/Slider";
// import Chip from "@mui/material/Chip";
// import Container from "@mui/material/Container";

// export default function ColorButtons() {
//   const label = {inputProps: {"aria-label": "Checkbox demo"}};
//   return (
//     <>
//       <Container maxWidth="lg">
//         <Stack direction="row" spacing={2} style={{background: "grey"}}>
//           <Button
//             // style={{backgroundColor: "#009688", color: "#fff"}}
//             variant="contained"
//             onClick={() => {
//               alert();
//             }}
//             color="primary"
//           >
//             Primary
//           </Button>
//           <Button variant="outlined" color="success" size="large">
//             Success
//           </Button>
//           <Button variant="outlined" color="error">
//             Error
//           </Button>
//           <Checkbox {...label} />
//           <Slider aria-label="Volume" />

//           <Stack direction="row" spacing={1}>
//             <Chip label="primary" color="primary" variant="outlined" />
//             <Chip label="success" color="success" variant="contained" />
//           </Stack>
//         </Stack>
//       </Container>

//       {/* <Stack direction="row" spacing={2}>
//         <Avatar>H</Avatar>
//         <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
//         <Avatar sx={{bgcolor: deepPurple[500]}}>OP</Avatar>
//       </Stack> */}
//     </>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <LibraryAddRoundedIcon style={{color: "#f00", fontSize: "500px"}} />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
