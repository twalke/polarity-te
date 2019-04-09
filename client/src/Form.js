import React, {Component} from "react";
import axios from "axios";

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

    axios.post("http://localhost:8081/hobbiesList", this.state)
    .then(res => console.log(res.data));
  }

  render() {
    const {name, hobby} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="formInput" onChange={this.handleChange} name="name" value={name} type="text" placeholder="Enter Name" />
        <input className="formInput" onChange={this.handleChange} name="hobby" value={hobby} type="text" placeholder="Enter Hobby" />
        <button className="Button" >Submit</button>
        </form>
    )
  }
}

export default Form;
