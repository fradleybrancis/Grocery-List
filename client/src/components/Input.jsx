import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleChange(e) {
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <label> Item
          <input onChange={() => {this.handleChange()}} />
        </label>
        <label> Quantity
          <input name="quantity"/>
        </label>
        <button>Add Grocery</button>
      </form>
    )
  }
}

/*
- stop form from trying to submit on button press
- Type inside of both inputs
- On clicking the button, add the item to our list

*/


export default Input;