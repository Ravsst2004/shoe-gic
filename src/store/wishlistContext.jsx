import { createContext, useState } from "react";
import products from "../../data/products.json";

export const WishlistContext = createContext({
  items: [],
  handleAddItemToWishlist: () => {},
  handleRemoveItemFromWishlist: () => {},
});

export default function WishlistContextProvider() {
  const [wishlist, setWishlist] = useState({
    items: [],
  });
  const [status, setStatus] = useState(false);

  const handleAddItemToWishlist = (id) => {
    setWishlist((prevState) => {
      const updatedItems = [...prevState.items];
      const existingWishlistItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );

      const existingWishlistItem = updatedItems[existingWishlistItemIndex];

      if (existingWishlistItem) {
        setStatus(true);
        console.log("Item already in wishlist");
      } else {
        const product = products.find((product) => product.id === id);
        updatedItems.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.discountedPrice
            ? product.discountedPrice
            : product.price,
        });
      }
    });
  };

  const contextValue = {
    items: wishlist.items,
    status,
    handleAddItemToWishlist,
    // handleRemoveItemFromCart,
    // handleUpdateItemQuantity,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
}
