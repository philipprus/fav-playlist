import { connect } from "react-redux";
import Header from "./header";
import { setSort, openPage } from "../../redux/actions";

const mapStateToProps = (state) => {
    return {
        favorite_list_count: state.tracks.favorite_list ? state.tracks.favorite_list.length : 0,
        statusOpenPage: state.openPage,
        sort: state.sort

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      openPage: () => dispatch(openPage()),
      setSort: (sort) => dispatch(setSort(sort))
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
