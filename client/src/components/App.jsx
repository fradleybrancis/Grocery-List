import React from 'react';
import Input from './Input.jsx';
import GroceryList from './GroceryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {item: 'Frozen Pizza', quantity: 5},
        {item: 'Yogurt', quantity: 10},
        {item: 'Pizza', quantity: 1},
        {item: 'Bannana', quantity: 3}
      ]
    }
  }

  render() {
    return (
      <div>
        <Input sup="things"/>
        <GroceryList groceries={this.state.groceries}/>
      </div>
    )
  }
}

export default App;