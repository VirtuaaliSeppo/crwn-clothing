import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  Image,
  CollectionItemButton,
  CollectionItemFooter,
  Name,
  Price,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></Image>
      <CollectionItemFooter>
        <Name>{name}</Name>
        <Price className="price">{price}</Price>
      </CollectionItemFooter>
      <CollectionItemButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
