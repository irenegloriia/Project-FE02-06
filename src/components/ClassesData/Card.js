import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    background: '#f1f1f1',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title="Class title"
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          24 students
        </Typography>
        {/* <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}
          o
          {bull}
          lent
        </Typography> */}
        {/* <Typography className={classes.pos} color="textSecondary">
          class description
        </Typography> */}
        <Typography variant="body2" component="p">
          class description
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" justify="center" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
}
