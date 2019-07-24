import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FormControl, Select, MenuItem, Button } from '@material-ui/core';
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
  formSort: {
    color: '#ffffff',
    marginRight: 20
  },
  buttonAdd: {
    color: '#fff', border: '1px solid #fff', marginRight: 10
  },
  countSongs: {
    marginRight: 20
  },
  selectRoot: {
    color: '#fff'
  },
  selectIcon: {
    color: "#fff"
  },
  selectUnderline: {
    borderBottom: "2px solid #ff747e"
  }
}));

function Header(props) {
  const classes = useStyles();
  const { favorite_list_count, statusOpenPage, setSort, sort } = props;

  function handleChange(event) {
  
    setSort && setSort(event.target.value)
  }
  
  function handlerClosePage() {
    const { openPage } = props;
    openPage && openPage();
    props.history.push("/");
  }

  const formSort = () => {
    return  <form className={classes.formSort} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                      classes={{root: classes.selectRoot, icon: classes.selectIcon}}
                      value={sort}
                      onChange={handleChange}
                    >
                    <MenuItem value={FILTERS.BY_DEFAULT}>By Date Added</MenuItem>
                    <MenuItem value={FILTERS.BY_ALBUM}>By Album</MenuItem>
                    <MenuItem value={FILTERS.BY_ARTIST}>By Artist</MenuItem>
                    <MenuItem value={FILTERS.BY_TRACK}>By Track</MenuItem>
                    {/* <MenuItem value={FILTERS.BY_TRACK_LENGTH}>By track length</MenuItem> */}
                    </Select>
                </FormControl>
            </form>
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
              <Typography className={classes.title} variant="h6" noWrap>
                💖 Favorite PlayList Songs
              </Typography>
            {statusOpenPage && statusOpenPage.status && <Button className={classes.buttonAdd} onClick={()=> handlerClosePage()}>👌 Back</Button>}
            {statusOpenPage && !statusOpenPage.status && formSort()}
            <Typography className={classes.countSongs}>
              Songs: {favorite_list_count}/{MAX_TRACKS}
            </Typography>
            <ModalAddTrack textButton="Add"/>
        </Toolbar>
        
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
