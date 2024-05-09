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
            :data-shoppingBasketId="shoppingBasketId"
            @update-shopping-basket-id="updateShoppingBasketId($event)"
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
import { computed, ref, watch } from "vue";
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
/////// 대표 상품의 가격을 상품 추가 버는 클릭시 자동으로 반영되게 하는 코드 작성 /////
// const multiOptionBasketData = ref(null); // 초기 값은 null로 설정

const shoppingBasketId = ref(null);

const updateShoppingBasketId = (event) => {
  shoppingBasketId.value = event.target.dataset.shoppingBasketId;
  console.log("id", shoppingBasketId.value);
};

const multiOptionBasketData = (shoppingBasketId) => {
  const optionShoppingBasket = formmatedShoppingBaskets.value.filter(
    (shoppingBasket) => shoppingBasket.isMultiIOption
  );

  // console.log(optionShoppingBasket);
  if (optionShoppingBasket.length > 0) {
    // 데이터가 있는 경우에만 처리
    // const shoppingBasketId = optionShoppingBasket[3].id;
    const recentBaskets = formmatshoppingBaskets(
      formmatedShoppingBaskets.value
    );
    const multiOptionProduct = recentBaskets.find(
      (shoppingBasket) => shoppingBasket.id === shoppingBasketId
    );
    // console.log(multiOptionProduct);

    if (multiOptionProduct) {
      return {
        id: shoppingBasketId,
        productName: multiOptionProduct.productName,
        count: multiOptionProduct.count,
        item: {
          detailId: multiOptionProduct.detailId,
          categoryName: multiOptionProduct.item.reduce((acc, item) => {
            return acc.concat(item.categoryName);
          }, []),
          detailName: multiOptionProduct.productName,
          detailPrice: multiOptionProduct.item.reduce((acc, item) => {
            return acc + item.detailPrice * item.count;
          }, 0),
        },
        imgSrc: multiOptionProduct.imgSrc,
        isMultiIOption: true,
        isPicked: false,
      };
    }
  } else {
    // 데이터가 없는 경우 null로 설정
    return null;
  }
};

console.log("datachange", multiOptionBasketData.value);

watch(
  formmatedShoppingBaskets,
  (newVal, oldVal) => {
    // const optionShoppingBasket = newVal.filter(
    //   (shoppingBasket) => shoppingBasket.isMultiIOption
    // );
    // console.log(optionShoppingBasket);
    // if (optionShoppingBasket.length > 0) {
    //   // 데이터가 있는 경우에만 처리
    //   const shoppingBasketId = optionShoppingBasket[3].id;
    //   const recentBaskets = formmatshoppingBaskets(newVal);
    //   const multiOptionProduct = recentBaskets.find(
    //     (shoppingBasket) => shoppingBasket.id === shoppingBasketId
    //   );
    //   if (multiOptionProduct) {
    //     multiOptionBasketData.value = {
    //       id: shoppingBasketId,
    //       productName: multiOptionProduct.productName,
    //       count: multiOptionProduct.count,
    //       item: {
    //         detailId: multiOptionProduct.detailId,
    //         categoryName: multiOptionProduct.item.reduce((acc, item) => {
    //           return acc.concat(item.categoryName);
    //         }, []),
    //         detailName: multiOptionProduct.productName,
    //         detailPrice: multiOptionProduct.item.reduce((acc, item) => {
    //           return acc + item.detailPrice * item.count;
    //         }, 0),
    //       },
    //       imgSrc: multiOptionProduct.imgSrc,
    //       isMultiIOption: true,
    //       isPicked: false,
    //     };
    //   }
    //   console.log("datachange", multiOptionBasketData.value);
    // } else {
    //   // 데이터가 없는 경우 null로 설정
    //   multiOptionBasketData.value = null;
    // }
  }
  // { immediate: true }
); // immediate 옵션을 사용하여 초기 값에서도 실행되도록 설정

// watch(
//   multiOptionBasketData.value?.item.detailPrice,
//   (newVal, old) => {
//     console.log("newVal", newVal, old);
//   },
//   { immediate: true }
// );

// const asd = formmatedShoppingBaskets.value.filter(
//   (shoppingBasket) => shoppingBasket.isMultiIOption
// );

// watch(formmatedShoppingBaskets, () => {
//   setMultiOptionBasketData.value = setMultiOptionBasketData(asd[0].id);
//   console.log("multiOptionBasketData", setMultiOptionBasketData.value);
// });

const isAllCheck = computed(() =>
  formmatedShoppingBaskets.value.every(
    (shoppingBasket) => shoppingBasket.isPicked
  )
);

const totalProductsPrice = computed(() =>
  formmatedShoppingBaskets.value.reduce(
    (acc, curr) => acc + curr.item.detailPrice * curr.item.count,
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
  console.log("represent", multiOptionBasketData.value);

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

const storeShoppingBaksets = (formmatBaskets) => {
  const recentBaskets = formmatshoppingBaskets(formmatBaskets);
  localStorage.setItem("shopping", JSON.stringify(recentBaskets));
};
</script>

<style src="@/assets/css/basket/Contents.css" module></style>
