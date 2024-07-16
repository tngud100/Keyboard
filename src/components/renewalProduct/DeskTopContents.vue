<template>
  <div :class="$style.textWrapper">
    <span :class="$style.text">상품</span>
  </div>
  <Nav />
  <div :class="$style.productWrapper">
    <ul :class="$style.productList">
      <Product
        v-for="item in productList"
        :key="item.id"
        :id="item.id + 1"
        :productImg="item.listImg"
        :backgroundImg="item.listBackImg"
        :price="item.amount"
        :name="item.name"
        @click="moveKeyboardDetailPage(item.id)"
      />
    </ul>
  </div>
</template>

<script setup>
import Nav from "@/layouts/RenewalProductNav.vue";
import Product from "#/common/Product.vue";
import { useRouter } from "vue-router";
import { getProductAPI } from "@/api/ProductGetDataAPI.js";
import { computed, onMounted, ref, watch } from "vue";

const { getProductList } = getProductAPI();

const router = useRouter();

const productList = ref([]);

const path = computed(() => router.currentRoute.value.path);

watch(path, (newVal) => {
  getProductData();
});

const moveKeyboardDetailPage = (id) => {
  router.push({
    path: `product/keyboard/${id}`,
    query: { productId: id },
  });
};

const getProductData = async () => {
  productList.value = [];
  const dataList = await getProductList();
  for (let i = 0; i < dataList.value.length; i++) {
    if (
      dataList.value[i].type.toLowerCase() ===
      path.value.split("/")[2].toLowerCase()
    ) {
      const data = dataList.value[i];
      productList.value.push({
        id: data.productId,
        name: data.name,
        listImg: data.listImg,
        listBackImg: data.listBackImg,
        amount: data.amount,
        type: data.type,
      });
    }
  }
};

onMounted(() => {
  getProductData();
});
</script>

<style src="@/assets/css/renewalProduct/DeskTopContents.css" module></style>
