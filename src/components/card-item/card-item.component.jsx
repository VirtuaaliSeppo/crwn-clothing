import React from "react";
import { CartItemContainer, CartItemDetails } from "./card-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <CartItemDetails>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </CartItemDetails>
  </CartItemContainer>
);

export default CartItem;
