import { Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar"
import Feed from "./Components/Feed"
import Leftbar from "./Components/Leftbar";

function App() {
  return (
    <div>
     <Navbar/>

     <Grid container>
      <Grid item sm={3}>
        <Rightbar/>
      </Grid>

      <Grid item sm={7}>
        <Feed/>
      </Grid>

      <Grid item sm={2}>
        <Leftbar/>
      </Grid>
     </Grid>
    </div>
  );
}

export default App;
