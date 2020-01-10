import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';
import TableCell from './TableCell';

export default class Table extends Component {
    constructor(props) {
	super(props);
    }
    render() {
	return <TableRow/>
    }
}