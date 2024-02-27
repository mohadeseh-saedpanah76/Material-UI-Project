import React from 'react'
import { alpha, AppBar, InputBase, Toolbar, Typography, useTheme, Badge, Avatar, Container, Box } from '@mui/material'
import { Search, Mail, Notifications } from '@mui/icons-material'
import { useState } from 'react'


const Navbar = () => {
  const theme = useTheme()
  const [open , setOpen] = useState(false)
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

          <Container
            sx={{
              display:"flex",
              alignItems:"center",
              backgroundColor:alpha(theme.palette.common.white,0.15),
              "&:hover":{
                backgroundColor:alpha(theme.palette.common.white,0.25),
              },
              borderRadius:"4px",
              width:"50%",
              [theme.breakpoints.down("sm")]:{
                display: (open ? "flex" : "none")
              },
            }}
          >
          <Search
          />
            <InputBase placeholder="جستجو کنید"
              sx={{
                color:"white",
                marginRight:(theme.spacing(1.5))
              }}
            />
          </Container>
          <Box 
            sx={{
              display:"flex",
              alignItems:"center"
            }}
          >
          <Search 
            onClick ={()=>setOpen(true)}
            sx={{
              marginLeft:(theme.spacing(2)),
                display: (open ? "none" : "flex")
            }}
          />
          <Badge 
            badgeContent={4} 
            color="secondary"
            sx={{
              display: (open ? "none" : "flex")
            }}
          >
              <Mail color="action"
                sx={{
                  color:"white",
                  marginLeft:(theme.spacing(2)),
                }}
              />
          </Badge>
          <Badge 
            badgeContent={3} 
            color="secondary"
            sx={{
              display: (open ? "none" : "flex")
            }}
          >
              <Notifications color="action"
                sx={{
                  color:"white",
                  marginLeft:(theme.spacing(2)),
                }}
              />
          </Badge>

          <Avatar 
            alt="Cindy Baker" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwViW8fX3Gbj68tZ2XvH_PySnrpgiMsyBc6Gjq3ucmCPZoJjOQDmsVfv7B0A&s" 
            sx={{
              display: (open ? "none" : "flex")
            }}
          />
          </Box>
        </Toolbar>
      </AppBar>
     
    </div>
  )
}

export default Navbar
