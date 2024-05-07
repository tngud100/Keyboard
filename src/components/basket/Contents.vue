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
                  shoppingBasket.isMultiIOption
              )
            "
            :class="$style.picked"
            :shoppingBasket="multiOptionBasketData(shoppingBasketId)"
            @checkedProduct="checkProduct"
            @deletedProduct="deletProduct"
            @addedProduct="addProduct"
            @subtractedProduct="subtractProduct"
          />
          <div
            v-for="shoppingBasket in formmatedShoppingBaskets"
            :key="shoppingBasket.id"
            :class="$style.pickedContent"
          >
            <ProductPicked
              v-if="
                shoppingBasket.id === shoppingBasketId &&
                shoppingBasket.isMultiIOption
              "
              :class="$style.picked"
              :shoppingBasket="shoppingBasket"
              @checkedProduct="checkProduct"
              @deletedProduct="deletProduct"
              @addedProduct="addProduct"
              @subtractedProduct="subtractProduct"
            />
            <ProductPicked
              v-if="
                shoppingBasket.id === shoppingBasketId &&
                !shoppingBasket.isMultiIOption
              "
              :class="$style.picked"
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

const formmatedShoppingBaskets = ref(
  shoppingBaskets.flatMap((shoppingBasket) => {
    if (Array.isArray(shoppingBasket.item) && shoppingBasket.item.length > 1) {
      return shoppingBasket.item.map((item) => ({
        id: shoppingBasket.id,
        productName: shoppingBasket.productName,
        count: shoppingBasket.count,
        totalPrice: shoppingBasket.totalPrice,
        item,
        imgSrc: shoppingBasket.imgSrc,
        isMultiIOption: true,
        isPicked: false,
      }));
    } else {
      return {
        id: shoppingBasket.id,
        productName: shoppingBasket.productName,
        count: shoppingBasket.count,
        item: shoppingBasket.item[0],
        imgSrc: shoppingBasket.imgSrc,
        isMultiIOption: false,
        isPicked: false,
      };
    }
  })
);

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
      if (formmatedShoppingBasket.item.detailId === id) {
        return {
          ...formmatedShoppingBasket,
          item: {
            ...formmatedShoppingBasket.item,
            count: formmatedShoppingBasket.item.count + 1,
          },
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
      if (formmatedShoppingBasket.item.detailId === id) {
        return {
          ...formmatedShoppingBasket,
          item: {
            ...formmatedShoppingBasket.item,
            count: formmatedShoppingBasket.item.count - 1,
          },
        };
      }

      return formmatedShoppingBasket;
    }
  );
  storeShoppingBaksets(formmatedShoppingBaskets.value);
};

///////// 개수 별 대표 사진의 가격 단가 측정 ////////
const multiOptionBasketData = (shoppingBasketId) => {
  console.log("formmated", formmatedShoppingBaskets.value);
  const recentBaskets = formmatshoppingBaskets(formmatedShoppingBaskets.value);
  const multiOptionProduct = recentBaskets.filter(
    (shoppingBasket) =>
      shoppingBasket.id === shoppingBasketId && shoppingBasket.isMultiIOption
  );

  console.log("multiOptionProduct", multiOptionProduct);
  const basketData = {
    id: shoppingBasketId,
    productName: multiOptionProduct[0].productName,
    count: multiOptionProduct[0].count,
    item: {
      detailId: multiOptionProduct[0].detailId,
      categoryName: multiOptionProduct[0].item.reduce((acc, item) => {
        return acc.concat(item.categoryName);
      }, []),
      detailName: multiOptionProduct[0].productName,
      detailPrice: multiOptionProduct[0].item.reduce(
        (acc, item) => acc + item.detailPrice,
        0
      ),
    },
    imgSrc: multiOptionProduct[0].imgSrc,
    isMultiIOption: true,
    isPicked: false,
  };
  // console.log("basket", basketData);
  return basketData;
};

const formmatshoppingBaskets = (shoppingBaskets) => {
  const formattedBaskets = shoppingBaskets.reduce((acc, shoppingBasket) => {
    const existingBasket = acc.find(
      (basket) => basket.id === shoppingBasket.id && basket.isMultiIOption
    );
    if (existingBasket) {
      const newItem = Array.isArray(shoppingBasket.item)
        ? shoppingBasket.item
        : [shoppingBasket.item];
      existingBasket.item = existingBasket.item.concat(newItem); // 여기서 concat()을 사용하여 리스트로 추가합니다.
    } else {
      acc.push({
        id: shoppingBasket.id,
        productName: shoppingBasket.productName,
        count: shoppingBasket.count,
        totalPrice: shoppingBasket.totalPrice,
        item: Array.isArray(shoppingBasket.item)
          ? shoppingBasket.item
          : [shoppingBasket.item],
        imgSrc: shoppingBasket.imgSrc,
        isMultiIOption: true,
        isPicked: false,
      });
    }
    return acc;
  }, []);

  return formattedBaskets;
};

const storeShoppingBaksets = (formmatBaskets) => {
  const recentBaskets = formmatshoppingBaskets(formmatBaskets);
  localStorage.setItem("shopping", JSON.stringify(recentBaskets));
};
</script>

<style src="@/assets/css/basket/Contents.css" module></style>
