<template>
  <section :class="$style.wrapper">
    <h3 :class="$style.title">주문결제</h3>
    <p :class="$style.desc">
      <span :class="$style.strong">주문/결제 ></span> 주문완료
    </p>
    <section :class="$style.innerWrapper">
      <div :class="$style.contentWrapper">
        <div :class="$style.pickedWrapper">
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
        <div :class="$style.orderWrapper">
          <h4 :class="$style.orderTitle">주문자 정보</h4>
          <div :class="$style.orderTable">
            <div :class="$style.tableLeftCell">이름</div>
            <div :class="$style.tableRightCell">이형탁</div>
            <div :class="$style.tableLeftCell">이메일주소</div>
            <div :class="$style.tableRightCell">taklee2@naver.com</div>
            <div :class="$style.tableLeftCell">연락처</div>
            <div :class="$style.tableRightCell">010-0000-0000</div>
          </div>
        </div>
        <form>
          <div :class="$style.recipientWrapper">
            <h4 :class="$style.recipientTitle">수령자 정보</h4>
            <div :class="$style.recipientTable">
              <div :class="$style.tableLeftCell">배송지 선택</div>
              <div :class="$style.tableRightCell">
                <div :class="$style.recipientCheckboxesWrapper">
                  <div :class="$style.recipientCheckboxWrapper">
                    <input type="checkbox" id="1" />
                    <label for="1">기본 배송지</label>
                  </div>
                  <div :class="$style.recipientCheckboxWrapper">
                    <input type="checkbox" id="2" />
                    <label for="2">최근 배송지</label>
                  </div>
                  <div :class="$style.recipientCheckboxWrapper">
                    <input type="checkbox" id="3" />
                    <label for="3">신규 배송지</label>
                  </div>
                </div>
              </div>
              <div :class="$style.tableLeftCell">받는 분</div>
              <div :class="$style.tableRightCell">
                <div :class="$style.phoneNumberWrapper">
                  <input
                    :class="$style.phoneNumber"
                    placeholder="휴대폰번호 (필수)"
                    :value="phoneNumber"
                    @input="handlePhoneNumberChange"
                  />
                  <button type="button" :class="$style.phoneNumberBtn">
                    인증번호 발송
                  </button>
                </div>
              </div>
              <div :class="$style.tableLeftCell">주소</div>
              <div :class="`${$style.tableRightCell} ${$style.addressWrapper}`">
                <div>
                  <Input size="187px" placeholder="주소" :isReadOnly="true" />
                  <button
                    type="button"
                    :class="`${$style.signupBtn} ${$style.duplicatedBtn}`"
                  >
                    우편번호
                  </button>
                </div>
                <div :class="$style.inputWrapper">
                  <Input size="400px" :isReadOnly="true" />
                  <Input size="400px" />
                </div>
              </div>
              <div :class="$style.tableLeftCell">연락처</div>
              <div :class="$style.tableRightCell">
                <div :class="$style.telWrapper">
                  <div :class="$style.dropDownWrapper">
                    <div>
                      <IconMediumDownArrow />
                    </div>
                  </div>
                  <Input type="text" size="143px" />
                  <Input type="text" size="143px" />
                </div>
              </div>
            </div>
          </div>
        </form>
        <div :class="$style.paymentMethodWrapper">
          <h4 :class="$style.paymentMethodTitle">결제 수단</h4>
          <div :class="$style.paymentMethodTable">
            <div :class="$style.paymentMethodCheckboxesWrapper">
              <div :class="$style.paymentMethodCheckboxWrapper">
                <input type="checkbox" id="4" />
                <label for="4">신용 카드</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentInfo
        :totalProductsPrice="totalProductsPrice"
        :totalDelivery="totalDelivery"
        :totalPrice="totalPrice"
      />
    </section>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import Input from "#/common/Input.vue";
import ProductPicked from "#/common/ProductPicked.vue";
import PaymentInfo from "#/common/PaymentInfo.vue";
import IconMediumDownArrow from "@/components/icons/IconMediumDownArrow.vue";

const shoppingBaskets = JSON.parse(localStorage.getItem("shopping"));
const formmatedShoppingBaskets = ref(
  shoppingBaskets.map((shoppingBasket) => ({
    ...shoppingBasket,
    isPicked: false,
  }))
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

<style src="./Contents.css" module></style>
