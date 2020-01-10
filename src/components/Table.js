import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';
import TableCell from './TableCell';

export default class Table extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    currColor: "blue",
	    numRows: 1,
	    numCols: 1
	}
    }   
    decreaseRows = () => this.setState({numRows: this.state.numRows - 1});
    increaseRows = () => this.setState({numRows: this.state.numRows + 1});
    decreaseCols = () => this.setState({numCols: this.state.numCols - 1});
    increaseCols = () => this.setState({numCols: this.state.numCols + 1});
    changeColor = (newColor) => this.setState({currColor: newColor});
    getColor = () => this.state.currColor;
    render() {	
	var counter = [];
	for (var i = 0; i < this.state.numRows; i++) {
	    counter[i] = i;
	}
	var parsed = counter.map(() => {
		return <tr> <TableRow cols={this.state.numCols} getCol={this.state.currColor}/> </tr>;
	    });
	return (
		<div>
		<DropDown changeCol={this.changeColor}/>
		<Buttons decRow={this.decreaseRows} incRow={this.increaseRows} decCol={this.decreaseCols} incCol={this.increaseCols}/>
		<table>
		{parsed}
		</table>
		</div>
		);	    
    }
}

class Buttons extends Component {
    constructor(props) {
        super(props);
     }
    render() {
        return (
                <div>
                <button onClick={this.props.decRow}> Decrease Rows </button>
                <button onClick={this.props.incRow}> Increase Rows </button>
                <button onClick={this.props.decCol}> Decrease Cols </button>
                <button onClick={this.props.incCol}> Increase Cols </button> <br/>
                </div>
                );
    }
}
Buttons.propTypes = {
    decRow: PropTypes.func,
    incRow: PropTypes.func,
    decCol: PropTypes.func,
    incCol: PropTypes.func
};

class DropDown extends Component {
    constructor(props) {
        super(props);
    }
    onChangeHandler = (e) => {
	this.props.changeCol(e.target.value);
    };
    render() {
	var listColors = ["blue", "green", "pink", "red", "purple"];
	var options = listColors.map((color) => <option> {color} </option>);
	return (
		<select onChange={this.onChangeHandler}>
		    {options}
                </select>
		);
    }
}
DropDown.propTypes = {
    changeCol: PropTypes.func
};
