import React , {useState} from "react";

function Item({ name, category }) {
  
  const [isClicked , setIsClicked] = useState(false)

  function onSetIsClicked(){
    setIsClicked(isClicked => !isClicked)
  }

  const itemClass = isClicked ? 'in-cart' : ''
  const buttonText = isClicked ? 'Remove From Cart' : 'Add to Cart'
  const buttonClass = isClicked ? 'remove' : 'add'

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={onSetIsClicked}>{buttonText}</button>
    </li>
  );
}

export default Item;
