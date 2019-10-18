import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'components/utils/Select';
import SearchBar from 'components/utils/SearchBar';
import { statuses } from 'constants/statuses';

import './styles.css';

export default class UsersTable extends Component {
    static propTypes = {
        users: PropTypes.object,
        editUser: PropTypes.func,
        setUI: PropTypes.func,
        search: PropTypes.string
    };

    handleOnInputChange = (e) => {
        const { value } = e.currentTarget;
        const { setUI } = this.props;

        setUI({ search: value });
    };

    handleOnSelectChange = (id) => (e) => {
        const { editUser } = this.props;
        const { value: status } = e.currentTarget;

        editUser(id, status);
    };

    render() {
        const { users, search } = this.props;

        return (
            <div>
                <div className={'alignCenter mar-h'}>
                    <SearchBar onChangeHandler={this.handleOnInputChange} value={search} />
                </div>
                {Object.keys(users).map(user => <div key={users[user].id} className={'tableGrid'}>
                    <div>{users[user].name}</div>
                    <div>{users[user].role}</div>
                    <div>{users[user].connectedOn}</div>
                    <div>
                        <Select
                            name={'userStatus'}
                            options={statuses}
                            value={users[user].status}
                            onChangeHandler={this.handleOnSelectChange(users[user].id)}
                        />
                    </div>
                </div>)}
            </div>
        );
    }
}
