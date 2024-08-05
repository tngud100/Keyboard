<template>
  <div :class="$style.wrapper">
    <CustomTable
      :columns="columns"
      :rows="rows"
      @activeBtn="deleteBtn"
      @listClick="listClick"
    />
    <modal
      v-if="modalOpen"
      :title="title"
      :rows="modalOption"
      :selectedData="selectedData"
      @closeBtn="closeBtn"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup>
import CustomTable from "@/components/common/CustomTable.vue";
import { formattedPrice } from "@/utils/index.js";
import modal from "@/components/modal/RenewalEnrollModal.vue";
import { onMounted, ref, watch } from "vue";
import { renewalDataAPI } from "@/api/RenewalDataAPI.js";

const { getProductAllList, enrollProduct, getProductListById } =
  renewalDataAPI();

const props = defineProps({
  modalOpen: Boolean,
  title: String,
  selectedId: Number,
});

const emit = defineEmits(["closeBtn", "selectedList"]);

const columns = [
  {
    label: "카테고리",
    field: "category",
    width: "10%",
  },
  {
    label: "상품명",
    field: "name",
    width: "20%",
  },
  {
    label: "금액",
    field: "amount",
    width: "10%",
  },
  {
    label: "이미지",
    field: "img",
    width: "20%",
  },
  {
    label: "링크",
    field: "shopping_link",
    width: "20%",
  },
  {
    label: "등록일",
    field: "regdate",
    width: "10%",
  },
  {
    label: "관리",
    field: "active",
    width: "10%",
  },
];
const modalOption = [
  {
    label: "카테고리",
    field: "category",
    placeholder: "카테고리를 입력해주세요",
  },
  {
    label: "상품명",
    field: "name",
    placeholder: "상품을 입력해주세요",
  },
  {
    label: "금액",
    field: "amount",
    placeholder: "금액을 입력해주세요",
  },
  {
    label: "이미지",
    field: "image",
    placeholder: "이미지를 입력해주세요",
    imgFile: true,
  },
  {
    label: "링크",
    field: "shopping_link",
    placeholder: "URL주소를 입력해주세요",
  },
];
// const rows = [
//   {
//     id: 0,
//     category: "키보드",
//     product: "MM Studio Class 0413- 898cc55 click",
//     price: formattedPrice(180239) + "원",
//     img: "SG0001 키보드.jpeg",
//     link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
//     regdate: "등록일",
//     active: "삭제",
//   },
// ];
const rows = ref([]);

const selectedData = ref(null);

// watch(
//   () => props.selectedId,
//   (selectedId) => {
//     if (selectedId !== null) {
//       console.log("New selected ID:", selectedId);
//     }
//   }
// );

const listClick = async (id) => {
  const data = await getProductListById(id);
  selectedData.value = data;
  emit("selectedList", id);
};
const deleteBtn = (id) => {
  console.log(id);
};

const handleSubmit = async (formData) => {
  console.log("formData", formData);
  await enrollProduct(formData);
};

const closeBtn = () => {
  selectedData.value = null;
  emit("closeBtn");
};

const fetchProductAllList = async () => {
  const data = await getProductAllList();
  if (data) {
    rows.value = data.map((item) => {
      return {
        ...item,
        id: item.product_id,
        amount: formattedPrice(item.amount) + "원",
        active: "삭제",
      };
    });
  } else {
    console.log("there is no data");
  }
};

onMounted(async () => {
  fetchProductAllList();
});
</script>

<style src="@/assets/css/adminMain/TableList.css" module></style>