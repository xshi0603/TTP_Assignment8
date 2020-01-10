import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';

export default class TableRow extends Component {
    constructor(props) {
	super(props);
    }
    render() {
	return <TableCell/>
	    }
}