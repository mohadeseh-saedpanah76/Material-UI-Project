import React from 'react'
import { AppBar, InputBase, Toolbar, Typography, useTheme } from '@mui/material'
import { Search } from '@mui/icons-material'


const Navbar = () => {
  const theme = useTheme()
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'  
            sx={{
              display:"none",
              [theme.breakpoints.up("sm")]:{
                display:"block"
              }
            }}
          >
              وبلاگ تاپ لرن
          </Typography>
          <Typography variant='h6'
            sx={{
              display:"block",
              [theme.breakpoints.up("sm")]:{
                display:"none"
              }
            }}
          >
              تاپ لرن
          </Typography>

          <Search/>
          <InputBase/>
        </Toolbar>
      </AppBar>
     
    </div>
  )
}

export default Navbar
