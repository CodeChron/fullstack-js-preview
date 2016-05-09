import React from 'react'
import autoBind from 'react-autobind'

export class SingleFieldSubmit extends React.Component {

  //pass in props if needed in  the constructor
  constructor(props){

    super(props)
    //Set initial component state in the constructor 
    this.state = {
      inputValue: this.props.inputValue
    }

    //Automatically bind methods in the component to the current lexical 'this'
    autoBind(this)
  }

  //es6 object function syntax
  updateInputValue(e){

    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.state.inputValue)
    this.setState({inputValue: ""})
  }

  render() {
      return <form className="form-inline" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder={this.props.placeholder}
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
      </form>
  }
}

SingleFieldSubmit.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string
}

SingleFieldSubmit.defaultProps = {
  inputValue:  ""  ,
  placeholder: "New..."
}