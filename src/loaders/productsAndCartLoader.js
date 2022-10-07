import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  //get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //get cart
  const saveCart = getStoredCart();
  //   console.log("save cart: ", saveCart);
  for (const id in saveCart) {
    console.log(id);
  }

  return products;
};
