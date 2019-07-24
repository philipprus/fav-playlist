import { connect } from "react-redux";
import Playlist from "./playlist";
import { openPage, deleteTrack } from "../../redux/actions";
import { makeGetFavoriteTracksBySort } from "../../redux/selectors/track-selectors";

const mapStateToProps = (state) => {
    return {
        favorite_list: makeGetFavoriteTracksBySort(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openPage: () => dispatch(openPage()),
        deleteTrack: (track_id) => dispatch(deleteTrack(track_id))
    };
};

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);

export default PlaylistContainer;
