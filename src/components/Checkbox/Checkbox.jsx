import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Checkbox.css';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        if(this.props.onChange === null) { return; }
        this.props.onChange(this.props.id, ev.target.checked);
    }

    render() {
        return (
            <label>
                <input 
                    type="checkbox"
                    role="checkbox"
                    id={this.props.id}
                    className={styles.Checkbox}
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                    onChange={this.handleChange}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur} />
                {this.props.label}
            </label>
        );
    };
};

Checkbox.defaultProps = {

};

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};
