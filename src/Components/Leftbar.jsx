import { Container, useTheme } from '@mui/material'
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
        ساید بار چپ
      </div>
    </Container>
    
  )
}

export default Leftbar