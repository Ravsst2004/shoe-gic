import { createContext, useState } from "react";
import products from "../../data/products.json";

export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
  handleUpdateItemQuantity: () => {},
  handleRemoveItemFromCart: () => {},
});

const storeProductData = JSON.parse(localStorage.getItem("shoppingCart")) || [];
const storeProduct = storeProductData
  .map((storedItem) => {
    const product = products.find((product) => product.id === storedItem.id);
    return product ? { ...product, quantity: storedItem.quantity } : null;
  })
  .filter(Boolean);

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: storeProduct || [],
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

      const storedItems = updatedItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));
      localStorage.setItem("shoppingCart", JSON.stringify(storedItems));

      return { items: updatedItems };
    });
  };

  const handleUpdateItemQuantity = (id, amount) => {
    setShoppingCart((prevState) => {
      const updatedItems = prevState.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0);

      const storedItems = updatedItems.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      }));
      localStorage.setItem("shoppingCart", JSON.stringify(storedItems));

      if (updatedItems.length <= 0) {
        localStorage.removeItem("shoppingCart");
      }

      return {
        items: updatedItems,
      };
    });
  };

  const handleRemoveItemFromCart = (id) => {
    setShoppingCart((prevState) => {
      const updatedItems = prevState.items.filter((item) => item.id !== id);

      if (updatedItems.length <= 0) {
        localStorage.removeItem("shoppingCart");
      } else {
        const storedItems = updatedItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        }));
        localStorage.setItem("shoppingCart", JSON.stringify(storedItems));
      }

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
