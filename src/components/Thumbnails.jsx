import React from 'react'
import PropTypes from 'prop-types'
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getRandomColor, getRandomEmoji } from '../service/common';

const useStyles = makeStyles({
    media: {
      height: 150,
    }, 
    noMedia: {
      height: 150,
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      fontSize: 40
    }
  });

const Thumbnails = (props) => {
    const classes = useStyles();
    const {imageUrl, title } = props;
    return imageUrl ? <CardMedia
            className={classes.media}
            image={imageUrl}
            title={title}
        /> : <div className={classes.noMedia} style={{backgroundColor: getRandomColor()}}> {getRandomEmoji()} </div>
}

Thumbnails.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Thumbnails;