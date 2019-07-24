import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { TrackNoImage } from '../../track/track-no-image';
import { isLoading, isIdle } from '../../../service/deep-objects';
import { MAX_TRACKS, FILTERS } from '../../../service/constants';
import ModalDeleteTrack from '../delete-track/modal-delete-track-container';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    minHeight: 369,
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  textField : {
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
    '>label': {
      fontSize: 10
    }
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
}));

export default function ModalAddTrack(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hadleDeleteModalOpen = () => {
    setOpenDeleteModal(true);
  }

  const hadleDeleteModalClose = () => {
    console.log("close");
    setOpenDeleteModal(false);
  }

  const [values, setValues] = React.useState({
    name: '',
  });

  const handleChange = name => event => {
    const { fetchTracks } = props;
    const { value } = event.target;
    setValues({ ...values, [name]: value });
    fetchTracks(value);
  };

  const hadlerAddTrack = track => {
    const { addTrack, songsCount, clearFetchTracks, setSort } = props;
    if(songsCount >= MAX_TRACKS){
      hadleDeleteModalOpen();
    } else {
      setSort(FILTERS.BY_DEFAULT)
      addTrack && addTrack(track);
      clearFetchTracks && clearFetchTracks();
    }
  }

  const {textButton} = props;

  const displayCardTrack = () => {
    const {search_tracks} = props;
    if(isLoading(search_tracks)) {
      return "Loading"
    }
    if(isIdle(search_tracks) && search_tracks && search_tracks.track_list  && search_tracks.track_list.length > 0) {
        const { track_list } = search_tracks;
        const track = track_list[0].track;
        return  <TrackNoImage track={track} text_button={"😎 Add Song"} addTrack={() => hadlerAddTrack(track)} />
    } 
    if(isIdle(search_tracks) && search_tracks && search_tracks.track_list  && search_tracks.track_list.length === 0) {
      return <>Not found</>;
    }
    return <></>;
  }

  return (
    <div>
      <Button type="button" classes={{root: classes.root, label: classes.label}} onClick={handleOpen}>
        {textButton}
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Add Song 😍</h2>
          <p>
            Please, write name song.
          </p>
          <form noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Write track name"
              className={classes.textField}
              value={values.name}
              onChange={handleChange('name')}
              margin="normal"
            />
          </form>

         {displayCardTrack()}

        </div>
      </Modal>
      <ModalDeleteTrack open={openDeleteModal} onClose={()=>hadleDeleteModalClose()}/>
    </div>
  );
}