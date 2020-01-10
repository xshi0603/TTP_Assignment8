import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TableCell.css';

export default class TableCell extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    myCol: "grey"
	}
    }
    
    clickHandler = () => {
	this.setState({myCol: this.props.getCol})
    };

    render() {
	return <div class="cell" style={{background: this.state.myCol}} onClick={this.clickHandler}></div>;
            }
}

TableCell.propTypes = {
    getCol: PropTypes.string.isRequired
};