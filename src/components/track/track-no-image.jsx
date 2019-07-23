import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  });

export function TrackNoImage(props) {
    const { album_name, artist_name, track_name } = props.track;
    const { addTrack, text_button } = props;
    const classes = useStyles();
    return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {track_name ? track_name : "No name"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist: {artist_name ? artist_name : "No Artist name"} | Album: {album_name ? album_name : "No Album Name"}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={()=>addTrack(props.track)} size="small" color="primary">
              {text_button}
            </Button>
          </CardActions>
        </Card>
      );
}