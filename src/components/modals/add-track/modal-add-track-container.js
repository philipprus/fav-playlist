import { connect } from "react-redux";
import ModalAddTrack from "./modal-add-track";
import { fetchTracks, addTrack, clearFetchTracks, setFilter } from "../../../redux/actions";

const mapStateToProps = (state) => {
    return {
        search_tracks: state.tracks.search_tracks,
        songsCount: state.tracks.favorite_list.length
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTracks: (title) => dispatch(fetchTracks(title)),
        addTrack:  (track) => dispatch(addTrack(track)),
        clearFetchTracks: ()=> dispatch(clearFetchTracks()),
        setFilter: (filter)=> dispatch(setFilter(filter))
    };
};

const ModalAddTrackContainer = connect(mapStateToProps, mapDispatchToProps)(ModalAddTrack);

export default ModalAddTrackContainer;
