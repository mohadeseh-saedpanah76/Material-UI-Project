import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, useTheme, } from '@mui/material'
import React from 'react'


const Post = () => {
  const theme = useTheme()
  return (
      <Card
      sx={{marginBottom:theme.spacing(5)}}
      >
        <CardActionArea>
          <CardMedia
          sx={{height:"250px",
               [theme.breakpoints.down("sm")]:{
                height:"150px"
               }
        }}
          image="https://images.stockcake.com/public/d/5/b/d5b7bd4d-a03c-459a-81c1-0caf857dca17_large/futuristic-cityscape-invasion-stockcake.jpg"
          title="پست اول"
          />
          <CardContent>
            <Typography variant='h5' gutterBottom>
                این پست اول است
            </Typography>
            <Typography variant='body'>
               این یک متن ساختگی است برای این دوره
               این یک متن ساختگی است برای این دوره 
               این یک متن ساختگی است برای این دوره               
               این یک متن ساختگی است برای این دوره               
               این یک متن ساختگی است برای این دوره               
               این یک متن ساختگی است برای این دوره               
               این یک متن ساختگی است برای این دوره               
               این یک متن ساختگی است برای این دوره               
               این یک متن ساختگی است برای این دوره               
               این یک متن ساختگی است برای این دوره               

            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">بیشتر بخوانید</Button>
            <Button size="small" color="primary">اشتراک گذاری</Button>
          </CardActions>

        </CardActionArea>
      </Card>
  )
}

export default Post
