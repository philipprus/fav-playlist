import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

export default function ModalDeleteTrack(props) {
  const {open, onClose, favorite_list, track_add, addTrack, deleteTrack} = props;
console.log(track_add);
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
    addTrack && addTrack(track_add.track);
    onClose && onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Warnings: Many songs</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Your added very many songs, need delete songs. 
        If you choose agree, old song delete. 
        You can choose anofer songs for delete in this select form.
      </DialogContentText>
      <form  autoComplete="off">
      <FormControl >
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