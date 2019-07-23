import React from 'react';
import { Track } from '../../components/track/track';
import { Grid } from '@material-ui/core';
import ModalAddTrack from '../../components/modals/add-track/modal-add-track-container';
import { withRouter } from "react-router-dom";

class Playlist extends React.Component {

     handlerOpen = (track_id) => {
        const { openPage } = this.props;
        this.props.history.push("/"+track_id);
        openPage && openPage();
    }
  
    playlistView() { 
        const { favorite_list, deleteTrack } = this.props;
        return favorite_list.map( (track, index) => {
           return ( 
           <Grid item xs={12} sm={3} key={`grid-${index}`} >
                <Track track={track} onClick={() => this.handlerOpen(track.track_id)} deleteTrack={()=> deleteTrack(track.track_id)} />
           </Grid>); 
        });
    }
    

    render() {

        const { favorite_list } = this.props;

        if (favorite_list.length > 0 ) {
            return (
                <>
                <Grid container  spacing={3}>
                    {this.playlistView()} 
                </Grid>
            </>
            );
        } else {
            return <div>
                    <p>
                        No Favorites songs in playlist. 
                    </p>
                    <p>
                        Please, add your favorite songs.
                    </p>
                    <ModalAddTrack textButton="Add" color="blue"/>
                </div>;
        }
    }
}

export default withRouter(Playlist);