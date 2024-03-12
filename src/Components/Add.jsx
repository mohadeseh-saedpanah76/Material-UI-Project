import { Fab, Modal, Tooltip, Container, useTheme} from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { useState } from 'react'

const Add = () => {
  const [open , setOpen] = useState(false)
  const theme = useTheme()
  return (
    <div>
      <Tooltip title="افزودن پست" aria-label="add" onClick={()=>setOpen(true)}>
        <Fab color="primary"
        sx={{
            position:"fixed",
            bottom:"10px",
            left:"10px"
        }}
        >
            <AddIcon/>
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container
         sx={{
          width:"500px",
          height:"550px",
          backgroundColor:"white",
          position:"absolute",
          top:0,
          right:0,
          left:0,
          bottom:0,
          margin:"auto",
          [theme.breakpoints.down("sm")]:{
            width:"100vw",
            height:"100vh"
          }
         }}
        >
          این مدال است
        </Container>
      </Modal>
    </div>
  )
}

export default Add
