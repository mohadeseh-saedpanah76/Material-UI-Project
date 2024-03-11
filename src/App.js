import { Grid, useTheme } from "@mui/material";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar"
import Leftbar from "./Components/Leftbar";
import Posts from "./Components/Posts";
import Add from "./Components/Add"

function App() {
  const theme = useTheme()
  return (
    <div>
     <Navbar/>

     <Grid container>
      <Grid item sm={2} xs={2}>
        <Rightbar/>
      </Grid>

      <Grid item sm={7} xs={10}>
        <Posts/>
      </Grid>

      <Grid item sm={3} 
        sx={{
          [theme.breakpoints.down("sm")]:{
            display:"none"
          }
        }}
      >
        <Leftbar/>
      </Grid>
     </Grid>

     <Add></Add>
    </div>
  );
}

export default App;
