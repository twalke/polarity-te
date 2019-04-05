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
  // keep track of state here
  // create methods for updating the item list here
  render() {
    return (
      <div>
        <Form submit={this.addItem} />
      {/* list and form rendered here */}
      </div>
    )
  }

}

export default TodoService;
