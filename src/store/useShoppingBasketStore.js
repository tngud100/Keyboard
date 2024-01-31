import { defineStore } from "pinia";
import { ref } from "vue";

export const useShoppingBasketStore = defineStore("shoppingBasket", () => {
  const shoppingBasket = ref(JSON.parse(localStorage.getItem("shopping")));

  return { shoppingBasket };
});
