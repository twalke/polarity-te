import React, {Component} from "react";

import Form from "./Form";

class TodoService extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState(ps => ({
      items: [...ps.items, item]
    }))
  }

  render() {
    return (
      <div>
        <Form submit={this.addItem} />
      </div>
    )
  }

}

export default TodoService;
