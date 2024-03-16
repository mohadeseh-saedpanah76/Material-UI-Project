import { 
   Fab, Modal, Tooltip,
   Container, useTheme, TextField,
   MenuItem, FormLabel ,RadioGroup ,
   FormControlLabel,Radio
  } 
from '@mui/material'
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
         <form autoComplete='off'>
         <div>
         <TextField id="standard-basic" label="عنوان" variant="standard" style={{width:"100%"}}/>
         </div>
         <div>
         <TextField 
          id="outlined-multiline-static"
          label="پیام شما"
          multiline
          rows={4}
          defaultValue="داستان خودت رو بگو..."
          variant="outlined" 
          style={{width:"100%"}}
          />
         </div>
         <div>
         <TextField select label="نوع دسترسی">
            <MenuItem value="public">
              عمومی
            </MenuItem>
            <MenuItem value="private">
              خصوصی
            </MenuItem>
            <MenuItem value="friend">
              نمایش برای دوستان
            </MenuItem>

          </TextField>
         </div>
         <div>
          <FormLabel id="demo-customized-radios">دسترسی کامنت گذاری</FormLabel>
          <RadioGroup
              defaultValue="female"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
            >
            <FormControlLabel 
            value="everybody" 
            control={<Radio size='small'/>} 
            label="برای همه" 
            />
            <FormControlLabel 
            value="friend "
             control={<Radio size='small' />} 
             label="برای دوستان"
              />
            <FormControlLabel 
            value="nobody"
             control={<Radio size='small' />} 
             label="هیچکس" 
             />
            <FormControlLabel
              value="سفارشی"
              disabled
              control={<Radio size='small'/>}
              label="سفارشی (کاربران ویژه)"
            />
          </RadioGroup>
         </div>
         </form>
        </Container>
      </Modal>
    </div>
  )
}

export default Add
