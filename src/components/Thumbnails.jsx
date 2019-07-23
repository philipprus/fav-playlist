import React from 'react'
import PropTypes from 'prop-types'
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import noImage from'../assets/images/no-image.png';

const useStyles = makeStyles({
    media: {
      height: 100,
    }
  });

const Thumbnails = (props) => {
    const classes = useStyles();
    const {imageUrl, title } = props;
    return <CardMedia
            className={classes.media}
            image={imageUrl ? imageUrl : noImage}
            title={title}
        />
}

Thumbnails.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Thumbnails;