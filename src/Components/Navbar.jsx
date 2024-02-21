import React from 'react'
import { alpha, AppBar, InputBase, Toolbar, Typography, useTheme, Badge } from '@mui/material'
import { Search, Mail } from '@mui/icons-material'


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
            borderRadius:(theme.shape.borderRadius),
            width:"40%",
           }}
          >
            <Search/>
            <InputBase placeholder="جستجو کنید"
              sx={{
                color:"white",
                marginRight:(theme.spacing(1.5))
              }}
            />
          </div>
          <div>
          <Badge badgeContent={4} color="secondary"
          >
              <Mail color="action"
                sx={{
                  color:"white"
                }}
              />
          </Badge>
          </div>
        </Toolbar>
      </AppBar>
     
    </div>
  )
}

export default Navbar
