import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';

export default class TableRow extends Component {
    constructor(props) {
	super(props);
    }
    render() {
	var counter = [];
	for (var i = 0; i < this.props.cols; i++) {
	    counter[i] = i;
	}
	var parsed = counter.map(() => <td> <TableCell getCol={this.props.getCol}/> </td>);	
	return parsed;
    }
}

TableRow.propTypes = {
    cols: PropTypes.number.isRequired,
    getCol: PropTypes.string.isRequired
}
