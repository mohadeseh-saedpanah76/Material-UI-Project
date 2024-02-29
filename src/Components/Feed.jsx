import { useTheme ,Container, } from '@mui/material'
import React from 'react'


const Feed = () => {
  const theme = useTheme()
  return (
      <Container
        sx={{
          paddingTop:theme.spacing(10)
        }}
      >
        <div>
         بخش پست ها
        </div>
      </Container>
  )
}

export default Feed
