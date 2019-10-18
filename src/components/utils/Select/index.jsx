import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, options, value, onChangeHandler }) => {
    return (
        <select name={name} defaultValue={value} onChange={onChangeHandler}>
            {options.map(option =>
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            )}
        </select>
    );
};

Select.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChangeHandler: PropTypes.func
};

Select.defaultProps = {
    options: [],
    onChangeHandler: () => {}
};

export default Select;
