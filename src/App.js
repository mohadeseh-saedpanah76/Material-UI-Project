import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";


function App() {
  return (
    <div>
      <Button 
      variant="contained"
      size="large"
      startIcon={<Person/>}
      backgroundColor = "primary"
      sx={{
        color:'white'
      }}
      > 
      سلام دنیا</Button>
    </div>
  );
}

export default App;
