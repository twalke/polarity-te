import React, {Component} from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hobby: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: {name, value} }) {
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState ({
      name: "",
      hobby: ""
    })
  }

  render() {
    const {name, hobby} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="name" value={name} type="text" placeholder="Enter Name" />
        <input onChange={this.handleChange} name="hobby" value={hobby} type="text" placeholder="Enter Hobby" />
        <button>Submit</button>
        </form>
    )
  }
}

export default Form;
