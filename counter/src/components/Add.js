import React,{Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

var that = this;
//console.log(this.props);
class addComponent extends Component {
	propTypes = {
		list: PropTypes.array.isRequired,
		Add: PropTypes.func.isRequired,
		text: PropTypes.string.isRequired,
		Delete: PropTypes.func.isRequired
	}
	
	handleClick(e) {
    const inputNode = findDOMNode(this.refs.input);
    const text = inputNode.value.trim();
		alert(text + 'hdc');
    this.props.Add(text);
		//alert(this.props.Add())
		
    inputNode.value = '';
  }

	render() {
    const { Add, list, Delete, Edit,text } = this.props
    return (
      <div>
			{text}
				<input type="text" ref='input'/>
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
        {' '}
				{
          list.map(function (item, i) {
          return (
            <li>
            <label>{item}</label>
            <button onClick = {Delete}>delete</button>
						<button onClick = {Edit}>edit</button>
            </li>
            );
          })
				}
      </div>
    )
  }
}

export default addComponent