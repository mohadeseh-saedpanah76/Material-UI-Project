import React from 'react'
import { alpha, AppBar, InputBase, Toolbar, Typography, useTheme } from '@mui/material'
import { Search } from '@mui/icons-material'


const Navbar = () => {
  const theme = useTheme()
  return (
    <div>
      <AppBar>
        <Toolbar 
        sx={{
          display:"flex",
          justifyContent:"space-between"
        }}
        >
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

          <div 
           style={{
            display:"flex",
            alignItems:"center",
            backgroundColor:alpha(theme.palette.common.white,0.15),
            "&:hover":{
              backgroundColor:alpha(theme.palette.common.white,0.25),
            },
            borderRadius:(theme.shape.borderRadius)
           }}
          >
            <Search/>
            <InputBase placeholder="جستجو کنید"/>
          </div>
          آیکون
        </Toolbar>
      </AppBar>
     
    </div>
  )
}

export default Navbar
