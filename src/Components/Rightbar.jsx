import { Container, useTheme } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  const theme = useTheme()
  return (
    <Container
      sx={{
        paddingTop:theme.spacing(10)
      }}
    >
      <div>
        ساید بار راست
      </div>
    </Container>
    
  )
}

export default Rightbar
