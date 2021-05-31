import React from 'react';
import { components } from 'react-select';
import PropTypes from 'prop-types';

export const Option = props => (
    <components.Option {...props}>
        <div className="flex items-center">
            <input
                type="checkbox"
                checked={props.isSelected}
                onChange={() => {}}
                className="mr-5"
            />
            <label>{props.label}</label>
        </div>
    </components.Option>
);

export const MultiValue = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);


Option.propTypes = {
    isSelected: PropTypes.bool,
    label: PropTypes.string,
};

MultiValue.propTypes = {
    data: PropTypes.shape({
        value: PropTypes.string | PropTypes.number,
        label: PropTypes.string
    })
};