import { defineStore } from "pinia";
import { ref } from "vue";

export const useShoppingStore = defineStore("shopping", () => {
  const addShoppingBasket = () => {
    localStorage.setItem("shopping", mergeShoppingBasket());
  };

  const mergeShoppingBasket = () => {
    const storedShoppingBasket = JSON.parse(localStorage.getItem("shopping"));

    if (storedShoppingBasket === null) {
      return JSON.stringify(selectedProducts.value);
    }

    const mapedSelecteProducts = selectedProducts.value.map((product) => {
      return storedShoppingBasket.map(({ id, color, type, count, price }) => {
        if (product.color === color && product.type === type) {
          return {
            id,
            color,
            type,
            count: count++,
            price: price * count,
          };
        }

        return {
          id,
          color,
          type,
          count,
          price,
        };
      });
    });

    console.log(storedShoppingBasket);
    console.log(mapedSelecteProducts);

    // [...storedShoppingBasket, ...selectedProducts.value]

    // return JSON.stringify(currentShoppingBasket);
  };

  return { addShoppingBasket };
});
