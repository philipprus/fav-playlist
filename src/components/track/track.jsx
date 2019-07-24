import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { cropLongString } from '../../service/common';
import Thumbnails from '../Thumbnails';

const useStyles = makeStyles({
    card: {
      height: 300,
      position: 'relative',
      overflow: 'inherit'
    },
    media: {
      height: 100,
    },
    title: {
      height: 70,
      fontSize: '1.3rem'
    },
    subTitle: {
      height: 40
    },
    closeButton: {
      position: 'absolute',
      right: '-15px',
      background: '#3f51b5',
      boxShadow: '0px 0px 6px #000',
      padding: '2px',
      top: '-15px',
      color: '#fff',
      zIndex: 10
    }
  });

export function Track(props) {
    const { album_name, artist_name, track_name, album, added_date } = props.track;
    const {onClick, deleteTrack} = props;
    const classes = useStyles();
    return (
        <Card className={classes.card}   >
          <IconButton aria-label="Close" className={classes.closeButton} onClick={()=>deleteTrack()} >
          <CloseIcon />
        </IconButton>
          <CardActionArea onClick={()=>onClick()}>
            <Thumbnails imageUrl={album && album.album_coverart_100x100} title={album_name} />
            <CardContent>
              <Typography className={classes.title} gutterBottom   component="h2">
                {cropLongString(track_name, 30)}
              </Typography>
              <Typography  color="textSecondary" component="p" className={classes.subTitle}>
                  Artist: {cropLongString(artist_name, 20)}  <br/>
                  Album: {cropLongString(album_name,20)} <br/>
                  Date: {added_date}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={onClick} size="small" color="primary">
              More...
            </Button>
          </CardActions>
        </Card>
      );
}