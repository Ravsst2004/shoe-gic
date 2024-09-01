import { createContext, useState } from "react";
import products from "../../data/products.json";

export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
  handleUpdateItemQuantity: () => {},
  handleRemoveItemFromCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const handleAddItemToCart = (id) => {
    setShoppingCart((prevState) => {
      const updatedItems = [...prevState.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = products.find((product) => product.id === id);

        updatedItems.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
  };

  const handleUpdateItemQuantity = (id, amount) => {
    setShoppingCart((prevState) => {
      const updatedItem = prevState.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0);

      return {
        items: updatedItem,
      };
    });
  };

  const handleRemoveItemFromCart = (id) => {
    setShoppingCart((prevState) => {
      const updatedItems = prevState.items.filter((item) => item.id !== id);
      return { items: updatedItems };
    });
  };

  const contextValue = {
    items: shoppingCart.items,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    handleUpdateItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
