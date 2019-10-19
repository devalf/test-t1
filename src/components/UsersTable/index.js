import { connect } from 'react-redux';

import Component from './component';
import { editUserStatus } from 'state/usersData/actions';
import { selectUsersFiltered } from 'state/usersData/selectors';
import { setUI } from 'state/ui/actions';
import { selectUISearch } from 'state/ui/selectors';

const mapStateToProps = (state) => ({
    users: selectUsersFiltered(state),
    search: selectUISearch(state)
});

const mapDispatchToProps = (dispatch) => ({
    editUser: (userId, status) => dispatch(editUserStatus(userId, status)),
    setUI: (payload) => dispatch(setUI(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
