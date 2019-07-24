import React from 'react';
import { Track } from '../../components/track/track';
import { Grid } from '@material-ui/core';
import ModalAddTrack from '../../components/modals/add-track/modal-add-track-container';
import { withRouter } from "react-router-dom";

function Playlist(props) {

     const handlerOpen = (track_id) => {
        const { openPage } = props;
        props.history.push("/"+track_id);
        openPage && openPage();
    }
  
    function playlistView() { 
        const { favorite_list, deleteTrack } = props;
        return favorite_list.map( (track, index) => {
           return ( 
           <Grid item xs={12} sm={6} md={3} key={`grid-${index}`} >
                <Track track={track} onClick={() => handlerOpen(track.track_id)} deleteTrack={()=> deleteTrack(track.track_id)} />
           </Grid>); 
        });
    }
    

    // render() {
        const { favorite_list } = props;

        if (favorite_list.length > 0 ) {
            return (
                <>
                <Grid container  spacing={3}>
                    {playlistView()} 
                </Grid>
            </>
            );
        } else {
            return <div style={{textAlign:'center', height: '60vh', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                    <h2>
                        <span role="img" aria-label="heart">😅</span> <br/>
                        No Favorites songs in playlist. 
                    </h2>
                    <p>
                        Please, add your favorite songs.
                    </p>
                    <ModalAddTrack textButton="Add song" color="blue"/>
                </div>;
        }
    }

export default withRouter(Playlist);