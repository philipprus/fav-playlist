import { connect } from "react-redux";
import ModalAddTrack from "./modal-add-track";
import { fetchTracks, addTrack, clearFetchTracks, setSort } from "../../../redux/actions";

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
        setSort: (sort)=> dispatch(setSort(sort))
    };
};

// CR: this is also used as a child inside under container which should be generally avoided although is allowed in specific cases. If it's hard to change it to be otherwise, I would simply comment on that in README.md that you know of that but it's good enough for this app.
const ModalAddTrackContainer = connect(mapStateToProps, mapDispatchToProps)(ModalAddTrack);

export default ModalAddTrackContainer;
