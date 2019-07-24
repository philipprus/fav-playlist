import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import { FILTERS } from '../../../service/constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  select: {
    width: '100%'
  },
  modal: {
    border: '2px solid #e63421'
  }
}));

export default function ModalDeleteTrack(props) {
  const classes = useStyles();
  const {open, onClose, favorite_list, track_add, addTrack, deleteTrack, setSort, clearFetchTracks} = props;
  const [values, setValues] = React.useState({
    track_id: 0
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handlerAgree() {
    if(values.track_id){
        deleteTrack && deleteTrack(values.track_id);
    } else {
        deleteTrack && deleteTrack(favorite_list[favorite_list.length-1].track_id);
    }
    setSort(FILTERS.BY_DEFAULT)
    addTrack && addTrack(track_add.track);
    clearFetchTracks && clearFetchTracks();
    onClose && onClose();
  }

  return (
    <Dialog open={open} className={classes.modal} onClose={onClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title"> <span role="img" aria-label="heart-eyes">😤</span> Warnings: Exceeded the limit </DialogTitle>
    <DialogContent>
      <DialogContentText>
          You exceeded the limit of songs in a favourites. <br/>
        If you press "ok" th oldest song will be deleted.<br/>
        You can choose song to be deleted from the following list.
      </DialogContentText>
      <form  autoComplete="off">
            <FormControl className={classes.select}>
                <Select 
                
                value={values.track_id}
                onChange={handleChange}
                inputProps={{
                    name: 'track_id',
                    id: 'track_id',
                }}
                >   
                    <MenuItem value={0}>Oldest song</MenuItem>
                    {favorite_list.map( (track, index) => <MenuItem value={track.track_id} key={`song-for-delete-${index}`}>{track.track_name}</MenuItem>)}
                </Select>
            </FormControl>
        </form>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>onClose()} color="primary">
        Cancel
      </Button>
      <Button onClick={()=>handlerAgree()} color="primary">
        OK
      </Button>
    </DialogActions>
  </Dialog>
  );
}