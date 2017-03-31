import React,{Component, PropTypes } from 'react'
import addComponent from './Add'

class Counter extends Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
		onIncreament: PropTypes.func.isRequired,
		onDecreament: PropTypes.func.isRequired
	}
	
	incrementIfOdd = () => {
		console.log(this.props.value%2!==0)
		if (this.props.value % 2 !==0){
			this.props.onIncrement()
		} 
	}
	 
	incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000)
  }
	
	  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
				<addComponent />
      </div>
    )
  }
}

export default Counter