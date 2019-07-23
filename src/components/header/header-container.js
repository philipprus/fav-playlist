import { connect } from "react-redux";
import Header from "./header";
import { setFilter, openPage } from "../../redux/actions";

const mapStateToProps = (state) => {
    return {
        favorite_list_count: state.tracks.favorite_list ? state.tracks.favorite_list.length : 0,
        statusOpenPage: state.openPage,
        filter: state.filter

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      openPage: () => dispatch(openPage()),
      setFilter: (filter) => dispatch(setFilter(filter))
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
