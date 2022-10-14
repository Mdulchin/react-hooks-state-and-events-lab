import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
function addToCart(){
  setCart((cart) => !cart)
}

  return (
    <li className={cart ? "In-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? "Remove From" : "Add To"} onClick={addToCart}>{cart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
