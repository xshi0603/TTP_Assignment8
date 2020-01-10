import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Table from './components/Table';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';

import './App.css';

class DropDown extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    currColor:"blue"
	}
    }
    onChangeHandler = (e) => {
	this.setState({currColor:e.target.value});
	//console.log(e.target.value);
    }
    render() {
	var options = this.props.colors.map((color) => <option> {color} </option>);
	return (
		<select onChange={this.onChangeHandler}>
		{options}
		</select>
		);
    }
}
DropDown.propTypes = {
    colors: PropTypes.array
};
DropDown.defaultProps = {
    colors: ["blue", "green"]
};

class Buttons extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    numRows: 1,
	    numCols: 1
	}
    }

    decreaseRows = () => this.setState({numRows: this.state.numRows - 1});
    increaseRows = () => this.setState({numRows: this.state.numRows + 1});
    decreaseCols = () => this.setState({numCols: this.state.numCols - 1});
    increaseCols = () => this.setState({numCols: this.state.numCols + 1});

    render() {
	return (
		<div>
		<button onClick={this.decreaseRows}> Decrease Rows </button>
		<button onClick={this.increaseRows}> Increase Rows </button>
		<button onClick={this.decreaseCols}> Decrease Cols </button>
		<button onClick={this.increaseCols}> Increase Cols </button> <br/>
		    {this.state.numRows} <br/>
		    {this.state.numCols}
		</div>
		);
    }
}


function App() {
    var colorOptions = ["blue", "green", "pink", "purple"];

    return (
	    <div className="App-header">
	    
	    <DropDown colors={colorOptions}/> <br/>
	    <Table/> <br/>
	    <Buttons/> <br/>

	    </div>
	    );
}

export default App;
