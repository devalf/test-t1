import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/utils/Select';
import SearchBar from 'components/utils/SearchBar';
import { getSearchEntities } from 'utils/searching';
import { statuses } from 'constants/statuses';

import './styles.css';

export default class UsersTable extends Component {
    static propTypes = {
        users: PropTypes.array,
        editUser: PropTypes.func,
        setUI: PropTypes.func,
        search: PropTypes.string
    };

    handleOnInputChange = (e) => {
        const { value } = e.currentTarget;
        const { setUI } = this.props;

        setUI(getSearchEntities(value));
    };

    handleOnSelectChange = (id) => (e) => {
        const { editUser } = this.props;
        const { value: status } = e.currentTarget;

        editUser(id, status);
    };

    handleOnReset = () => {
        this.props.setUI({ search: '' });
    };

    render() {
        const { users, search } = this.props;

        return (
            <div>
                <div className={'alignCenter mar-h'}>
                    <SearchBar
                        onChangeHandler={this.handleOnInputChange}
                        value={search}
                        onResetClick={this.handleOnReset}
                    />
                </div>
                {users.map(user => <div key={user.id} className={'tableGrid'}>
                    <div>{user.name}</div>
                    <div>{user.role}</div>
                    <div>{user.connectedOn}</div>
                    <div>
                        <Select
                            name={'userStatus'}
                            options={statuses}
                            value={user.status}
                            onChangeHandler={this.handleOnSelectChange(user.id)}
                        />
                    </div>
                </div>)}
            </div>
        );
    }
}
