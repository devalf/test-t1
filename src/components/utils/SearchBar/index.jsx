import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChangeHandler}) => {
    return (
        <Fragment>
            <input type='text' value={value} onChange={onChangeHandler} />
            <button type='reset' className={'mar'}>Reset</button>
        </Fragment>
    );
};

SearchBar.propTypes = {
    onChangeHandler: PropTypes.func,
    value: PropTypes.string,
};

export default SearchBar;
