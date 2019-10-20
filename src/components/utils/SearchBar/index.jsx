import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SearchBar = ({ value, onChangeHandler, onResetClick }) => {
    return (
        <Fragment>
            <input type='text' value={value} onChange={onChangeHandler} className={'searchInput'} />
            <button type='reset' className={'mar'} onClick={onResetClick}>Reset</button>
        </Fragment>
    );
};

SearchBar.propTypes = {
    onChangeHandler: PropTypes.func,
    value: PropTypes.string,
    onResetClick: PropTypes.func
};

export default SearchBar;
