<template>
  <section :class="$style.wrapper">
    <h3 :class="$style.title">장바구니</h3>
    <div v-if="!formmatedShoppingBaskets.length">
      <section :class="$style.notContentWrapper">
        <p :class="$style.notContentDesc">장바구니에 담은 상품이 없습니다.</p>
        <button type="button" :class="$style.continueBtn">쇼핑 계속하기</button>
      </section>
    </div>
    <div v-else :class="$style.contentWrapper">
      <div :class="$style.pickedWrapper">
        <header :class="$style.header">
          <div :class="$style.leftSide">
            <input
              type="checkbox"
              id="all"
              :checked="isAllCheck"
              @change="checkAllProduct"
            />
            <label for="all">상품 정보</label>
          </div>
          <div :class="$style.rightSide">
            <button type="button" :class="$style.commonBtn">
              품절상품삭제
            </button>
            <button
              type="button"
              :class="$style.commonBtn"
              @click="deleteCheckedProduct"
            >
              선택삭제
            </button>
          </div>
        </header>
        <div
          v-for="shoppingBasketId in formmatedShoppingBasketIds"
          :key="shoppingBasketId"
          :class="$style.pickedContentWrapper"
        >
          <ProductPicked
            v-if="
              formmatedShoppingBaskets.some(
                (shoppingBasket) =>
                  shoppingBasket.id === shoppingBasketId &&
                  shoppingBasket.isPart
              )
            "
            :class="$style.partPick"
            :shoppingBasket="
              formmatedShoppingBaskets.find(
                (shoppingBasket) =>
                  shoppingBasket.id === shoppingBasketId &&
                  shoppingBasket.isPart
              )
            "
            @checkedProduct="checkProduct"
            @deletedProduct="deletProduct"
            @addedProduct="addProduct"
            @subtractedProduct="subtractProduct"
          />
          <!-- shoppingBasket="
              count: 1,
              isPart: true,
              isPicked: false,
              item: {
                categoryName: '카테고리',
                detailName: '상품명',
                detailPrice: 10000,
              },
              productName: '대표상품명',
            " -->
          <div
            v-for="shoppingBasket in formmatedShoppingBaskets"
            :key="shoppingBasket.id"
            :class="$style.pickedContent"
          >
            <ProductPicked
              v-if="
                shoppingBasket.id === shoppingBasketId && shoppingBasket.isPart
              "
              :class="$style.partPick"
              :shoppingBasket="shoppingBasket"
              @checkedProduct="checkProduct"
              @deletedProduct="deletProduct"
              @addedProduct="addProduct"
              @subtractedProduct="subtractProduct"
            />
            <ProductPicked
              v-if="
                shoppingBasket.id === shoppingBasketId && !shoppingBasket.isPart
              "
              :class="$style.partPick"
              :shoppingBasket="shoppingBasket"
              @checkedProduct="checkProduct"
              @deletedProduct="deletProduct"
              @addedProduct="addProduct"
              @subtractedProduct="subtractProduct"
            />
          </div>
        </div>
      </div>
      <div :class="$style.paymentInfoWrapper">
        <PaymentInfo
          :totalProductsPrice="totalProductsPrice"
          :totalDelivery="totalDelivery"
          :totalPrice="totalPrice"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import ProductPicked from "#/common/ProductPicked.vue";
import PaymentInfo from "#/common/PaymentInfo.vue";

const shoppingBaskets = JSON.parse(localStorage.getItem("shopping")) || [];

if (!shoppingBaskets.length) {
  localStorage.setItem("shopping", JSON.stringify([]));
}

const formmatedShoppingBasketIds = ref(
  Array.from(
    new Set(shoppingBaskets.map((shoppingBasket) => shoppingBasket.id))
  )
);
console.log("shoppingBaskets:", shoppingBaskets);

const formmatedShoppingBaskets = ref(
  shoppingBaskets.flatMap((shoppingBasket) => {
    if (Array.isArray(shoppingBasket.item) && shoppingBasket.item.length > 1) {
      return shoppingBasket.item.map((item) => ({
        id: shoppingBasket.id,
        productName: shoppingBasket.productName,
        count: shoppingBasket.count,
        item,
        isPart: true,
        isPicked: false,
      }));
    } else {
      return {
        id: shoppingBasket.id,
        productName: shoppingBasket.productName,
        count: shoppingBasket.count,
        item: shoppingBasket.item[0],
        isPart: false,
        isPicked: false,
      };
    }
  })
);
console.log("origin:", formmatedShoppingBaskets.value);

const isAllCheck = computed(() =>
  formmatedShoppingBaskets.value.every(
    (shoppingBasket) => shoppingBasket.isPicked
  )
);

const totalProductsPrice = computed(() =>
  formmatedShoppingBaskets.value.reduce(
    (acc, curr) => acc + curr.item.detailPrice * curr.count,
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
  storeShoppingBaksets(formmatedShoppingBaskets.value);
};

const deletProduct = (id) => {
  formmatedShoppingBaskets.value = formmatedShoppingBaskets.value.filter(
    (formmatedShoppingBasket) => formmatedShoppingBasket.id !== id
  );
  storeShoppingBaksets(formmatedShoppingBaskets.value);
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
  storeShoppingBaksets(formmatedShoppingBaskets.value);
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
  storeShoppingBaksets(formmatedShoppingBaskets.value);
};

const storeShoppingBaksets = (recentBaskets) => {
  localStorage.setItem("shopping", JSON.stringify(recentBaskets));
};
</script>

<style src="@/assets/css/basket/Contents.css" module></style>
