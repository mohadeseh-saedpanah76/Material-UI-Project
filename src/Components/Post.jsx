import { useTheme ,Container, } from '@mui/material'
import React from 'react'


const Post = () => {
  const theme = useTheme()
  return (
      <Container
        sx={{
          paddingTop:theme.spacing(10)
        }}
      >
        <div>
        این پست است
        </div>
      </Container>
  )
}

export default Post
