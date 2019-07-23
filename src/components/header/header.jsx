import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import ModalAddTrack from '../modals/add-track/modal-add-track-container';
import { MAX_TRACKS, FILTERS } from '../../service/constants';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles( (theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: "40px"
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Header(props) {
  const classes = useStyles();
  const { favorite_list_count, statusOpenPage, setFilter, filter } = props;
 
  const [values, setValues] = React.useState({
    filter: filter
  });
  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    setFilter && setFilter(event.target.value)
  }
  
  function handlerClosePage() {
    const { openPage } = props;
    openPage && openPage();
    props.history.push("/");
  }


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
            Favorite PlayList Songs
            </Typography>
            {statusOpenPage && statusOpenPage.status && <Button onClick={()=> handlerClosePage()}>Back</Button>}
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                    value={values.filter}
                    onChange={handleChange}
                    inputProps={{
                        name: 'filter',
                        id: 'filter',
                    }}
                    >
                    <MenuItem value={FILTERS.BY_DEFAULT}>By date added</MenuItem>
                    <MenuItem value={FILTERS.BY_ALBUM}>By album</MenuItem>
                    <MenuItem value={FILTERS.BY_ARTIST}>By Artist</MenuItem>
                    <MenuItem value={FILTERS.BY_TRACK}>By track</MenuItem>
                    <MenuItem value={FILTERS.BY_TRACK_LENGTH}>By track length</MenuItem>
                    </Select>
                </FormControl>
            </form>
            <Typography>
              Songs: {favorite_list_count}/{MAX_TRACKS}
            </Typography>
            <ModalAddTrack textButton="Add"/>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
