import * as React from "react";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Video = () => {
  return (
    <Grid container spacing={4} padding={3} paddingRight={"10%"} paddingLeft={"10%"}  >
      <Grid item xs={4.2} sm={3.2} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              sx={{borderRadius: "8px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards News
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 mil views - 1 year ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4.2} sm={3.2} md={3} >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              sx={{borderRadius: "8px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards News
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 mil views - 1 year ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4.2} sm={3.2} md={3} >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              sx={{borderRadius: "8px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards News
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 mil views - 1 year ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4.2} sm={3.2} md={3} >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              sx={{borderRadius: "8px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards News
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 mil views - 1 year ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={4.2} sm={3.2} md={3} >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              sx={{borderRadius: "8px"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards News
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 mil views - 1 year ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Video;
