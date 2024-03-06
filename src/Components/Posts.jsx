import { useTheme ,Container, } from '@mui/material'
import React from 'react'
import Post from './Post'


const Posts = () => {
  const theme = useTheme()
  return (
      <Container
        sx={{
          paddingTop:theme.spacing(10)
        }}
      >
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </Container>
  )
}

export default Posts
