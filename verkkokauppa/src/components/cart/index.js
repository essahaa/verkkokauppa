import React from "react";

export default function Cart({cart}){
console.log(cart.length)
return(
<>
  <img src="/images/cart.png" alt="cartkuva"></img>
  <span>{cart.length}</span>
  </>
)

}