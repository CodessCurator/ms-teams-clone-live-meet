import React, {Component} from 'react'
import {render} from 'react-dom'
import Calculator from "awesome-react-calculator";
 
const style = {
  height: '30rem',
  width: '15rem',
  position: 'absolute',
  bottom: '6%',
  right: '13%',
}
 
class Demo extends Component {
  handleInput(input) {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }
 
  onResultChange(newResult) {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }
  render() {
    return <div className='calculator-demo' style={style}>
     
      <Calculator
        onNewInput={this.handleInput}
        onResultChange={this.onResultChange}/>
    </div>
  }
}

export {Demo};