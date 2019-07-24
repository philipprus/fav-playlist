import { connect } from "react-redux";
import ModalDeleteTrack from "./modal-delete-track";
import { deleteTrack, addTrack, setSort } from "../../../redux/actions";

const mapStateToProps = (state) => {
    return {
        favorite_list: state.tracks.favorite_list,
        track_add: state.tracks.search_tracks.track_list[0],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTrack: (track_id) => dispatch(deleteTrack(track_id)),
        addTrack:  (track) => dispatch(addTrack(track)),
        setSort: (sort_name) => dispatch(setSort(sort_name))
    };
};

const ModalDeleteTrackContainer = connect(mapStateToProps, mapDispatchToProps)(ModalDeleteTrack);

export default ModalDeleteTrackContainer;
