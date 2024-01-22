<template>
  <section class="wrapper">
    <h3 class="title">장바구니</h3>
    <div v-if="!isShoppingBasket || !formmatedShoppingBaskets.length">
      <section class="contentWrapper">
        <p class="desc">장바구니에 담은 상품이 없습니다.</p>
        <button type="button" class="basketBtn">쇼핑 계속하기</button>
      </section>
    </div>
    <div v-else class="pickedsWrapper">
      <div class="pickedInner">
        <header class="header">
          <div class="headerLeftSide">
            <input
              type="checkbox"
              id="all"
              :checked="isAllCheck"
              @change="checkAllProduct"
            />
            <label for="all">상품 정보</label>
          </div>
          <div class="headerRightSide">
            <button type="button" class="btn">품절상품삭제</button>
            <button type="button" class="btn" @click="deleteCheckedProduct">
              선택삭제
            </button>
          </div>
        </header>
        <ProductPicked
          v-for="shoppingBasket in formmatedShoppingBaskets"
          :key="shoppingBasket.id"
          :shoppingBasket="shoppingBasket"
          @checkedProduct="checkProduct"
          @deletedProduct="deletProduct"
          @addedProduct="addProduct"
          @subtractedProduct="subtractProduct"
        />
      </div>
      <PaymentInfo
        :totalProductsPrice="totalProductsPrice"
        :totalDelivery="totalDelivery"
        :totalPrice="totalPrice"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import ProductPicked from "#/common/ProductPicked.vue";
import PaymentInfo from "#/common/PaymentInfo.vue";

const shoppingBaskets = ref(JSON.parse(localStorage.getItem("shopping")));
const formmatedShoppingBaskets = ref(
  shoppingBaskets.value.map((shoppingBasket) => ({
    ...shoppingBasket,
    isPicked: false,
  }))
);

const isShoppingBasket = computed(() => !!shoppingBaskets.value);
const isAllCheck = computed(() =>
  formmatedShoppingBaskets.value.every(
    (shoppingBasket) => shoppingBasket.isPicked
  )
);

const totalProductsPrice = computed(() =>
  formmatedShoppingBaskets.value.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  )
);

const totalDelivery = computed(
  () => formmatedShoppingBaskets.value.length * 3000
);

const totalPrice = computed(
  () => totalProductsPrice.value + totalDelivery.value
);

const checkAllProduct = () => {
  formmatedShoppingBaskets.value = formmatedShoppingBaskets.value.map(
    (formmatedShoppingBasket) => {
      return {
        ...formmatedShoppingBasket,
        isPicked: !isAllCheck.value,
      };
    }
  );
};

const checkProduct = (id) => {
  formmatedShoppingBaskets.value = formmatedShoppingBaskets.value.map(
    (formmatedShoppingBasket) => {
      if (formmatedShoppingBasket.id === id) {
        return {
          ...formmatedShoppingBasket,
          isPicked: !formmatedShoppingBasket.isPicked,
        };
      }

      return formmatedShoppingBasket;
    }
  );
};

const deleteCheckedProduct = () => {
  formmatedShoppingBaskets.value = formmatedShoppingBaskets.value.filter(
    (formmatedShoppingBasket) => formmatedShoppingBasket.isPicked === false
  );
};

const deletProduct = (id) => {
  formmatedShoppingBaskets.value = formmatedShoppingBaskets.value.filter(
    (formmatedShoppingBasket) => formmatedShoppingBasket.id !== id
  );
};

const addProduct = (id) => {
  formmatedShoppingBaskets.value = formmatedShoppingBaskets.value.map(
    (formmatedShoppingBasket) => {
      if (formmatedShoppingBasket.id === id) {
        return {
          ...formmatedShoppingBasket,
          count: formmatedShoppingBasket.count + 1,
        };
      }

      return formmatedShoppingBasket;
    }
  );
};

const subtractProduct = (id) => {
  formmatedShoppingBaskets.value = formmatedShoppingBaskets.value.map(
    (formmatedShoppingBasket) => {
      if (formmatedShoppingBasket.id === id) {
        return {
          ...formmatedShoppingBasket,
          count: formmatedShoppingBasket.count - 1,
        };
      }

      return formmatedShoppingBasket;
    }
  );
};
</script>

<style src="./Contents.css" scoped></style>
