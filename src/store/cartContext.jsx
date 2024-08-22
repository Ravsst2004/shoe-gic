import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  const handleAddItemToCart = (item) => {
    setShoppingCart((prevState) => ({
      ...prevState,
      items: [...prevState.items, item],
    }));
  };

  // CONTEXT VALUE
  const contextValue = {
    items: shoppingCart.items,
    handleAddItemToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
