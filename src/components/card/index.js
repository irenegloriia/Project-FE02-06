import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import axios from 'axios';
import { image2 } from '../../assets';
import './style.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 100,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // setUserDataLoading(true);
    axios
      .get('http://54.242.150.44:3000/lessons', {
        // eslint-disable-next-line
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGI4NDc3ZjE2YzBmNDViMDBmZjI1YiIsImlhdCI6MTYwODIyMTg2NSwiZXhwIjoxNjA4MzA4MjY1fQ.FVUGNDQrDEWDlyaHMkm_PRfXzr6x2WAtLedW_jYDBAE',
        },
      })
      .then((res) => {
        // eslint-disable-next-line
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log(error);
      })
      .finally(() => {
        // setUserDataLoading(false);
      });
  });

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="baseline"
      spacing={1}
    >
      <Grid container item xs={12} spacing={3}>
        {posts.map((res) => {
          return (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia>
                  <img alt="IM" className="picture" src={image2} />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {res.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {res.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
}
