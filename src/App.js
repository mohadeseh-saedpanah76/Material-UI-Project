import { Grid, useTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar"
import Feed from "./Components/Feed"
import Leftbar from "./Components/Leftbar";

function App() {
  const theme = useTheme()
  return (
    <div>
     <Navbar/>

     <Grid container>
      <Grid item sm={3}
        sx={{
          [theme.breakpoints.down("sm")]:{
            display:"none"
          }
        }}
      >
        <Rightbar/>
      </Grid>

      <Grid item sm={7} xs={10}>
        <Feed/>
      </Grid>

      <Grid item sm={2} xs={2}>
        <Leftbar/>
      </Grid>
     </Grid>
    </div>
  );
}

export default App;
