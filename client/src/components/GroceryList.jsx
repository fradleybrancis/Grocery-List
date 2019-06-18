import React from 'react';

const GroceryList = (props) => {
  console.log(props);

  return (
    <div>
      <ul className="groceries">
        {props.groceries.map((groceryItem, idx) => {
          return(
            <li key={idx}>
              <span>{groceryItem.item + "   "}</span>
              <span>{groceryItem.quantity}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GroceryList;

/*


*/