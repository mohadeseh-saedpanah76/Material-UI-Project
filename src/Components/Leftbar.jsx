import { Home } from '@mui/icons-material'
import { Container, Typography, useTheme } from '@mui/material'
import React from 'react'

const Leftbar = () => {
  const theme = useTheme()
  return (
   <Container
    sx={{
      paddingTop:theme.spacing(10)
    }}
   >
    <div>
      <Home/>
      <Typography>
        خانه
      </Typography>
    </div>
   </Container>
  )
}

export default Leftbar
