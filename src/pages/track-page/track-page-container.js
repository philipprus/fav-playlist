import { connect } from "react-redux";
import TrackPage from "./track-page";
import { openPage, getLyrics } from "../../redux/actions";

const mapStateToProps = (state, ownProps) => {
    return {
        track: state.tracks.favorite_list.find(track => track.track_id === Number(ownProps.match.params.trackID)) ,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openPage: ()=> dispatch(openPage()),
        getLyrics: (track_id) => dispatch(getLyrics(track_id))
    };
};

const TrackPageContainer = connect(mapStateToProps, mapDispatchToProps)(TrackPage);

export default TrackPageContainer;