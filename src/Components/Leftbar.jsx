import { Home } from '@mui/icons-material'
import { Container, Typography, useTheme } from '@mui/material'
import React from 'react'

const Leftbar = () => {
  const theme = useTheme()
  return (
   <Container
    sx={{
      paddingTop:theme.spacing(10),
      backgroundColor:theme.palette.primary.main,
      height:"100vh",
      color:"white"
    }}
   >
    <Container
      sx={{
        display:"flex",
        alignItems:"center",
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
          marginBottom:theme.spacing(4),
          cursor:"pointer"
        }
      }}
    >
      <Home/>
      <Typography
        sx={{
          [theme.breakpoints.down("sm")]:{
            display:"none"
          }
        }}
      >
        خانه
      </Typography>
    </Container>
   </Container>
  )
}

export default Leftbar
