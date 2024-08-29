import React from "react";
import Layouts from "../components/layouts/Layouts";
import WishlistContextProvider from "../store/WishlistContextProvider";

export default function Wishlist() {
  return (
    <WishlistContextProvider>
      <Layouts></Layouts>
    </WishlistContextProvider>
  );
}
