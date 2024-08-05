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
      @closeBtn="$emit('closeBtn')"
      @submit="handleSubmit"
    />
  </div>
</template>

<script setup>
import CustomTable from "@/components/common/CustomTable.vue";
import modal from "@/components/modal/RenewalEnrollModal.vue";
import { onMounted, ref, watch } from "vue";
import { renewalDataAPI } from "@/api/RenewalDataAPI.js";

const { enrollPictorialProduct, getMainPictorialList } = renewalDataAPI();

const props = defineProps({
  title: String,
  modalOpen: Boolean,
  selectedId: Number,
});

const emit = defineEmits(["closeBtn", "selectedList"]);

const columns = [
  {
    label: "번호",
    field: "num",
    width: "5%",
  },
  {
    label: "상품명",
    field: "product",
    width: "14%",
  },
  {
    label: "문구",
    field: "comment",
    width: "25%",
  },
  {
    label: "화보 이미지",
    field: "img",
    width: "16%",
  },
  {
    label: "링크",
    field: "link",
    width: "24%",
  },
  {
    label: "등록일",
    field: "regdate",
    width: "8%",
  },
  {
    label: "관리",
    field: "active",
    width: "8%",
  },
];
// const rows = [
//   {
//     id: 0,
//     num: "1",
//     product: "MM Studio Class 0413- 898cc55 click",
//     comment:
//       "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
//     img: "SG0001 키보드.jpeg",
//     link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
//     regdate: "2024-08-29",
//     active: "삭제",
//   },
//   {
//     id: 1,
//     num: "2",
//     product: "MM Studio Class 0413- 898cc55 click",
//     comment:
//       "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
//     img: "SG0001 키보드.jpeg",
//     link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
//     regdate: "2024-08-29",
//     active: "삭제",
//   },
//   {
//     id: 2,
//     num: "3",
//     product: "MM Studio Class 0413- 898cc55 click",
//     comment:
//       "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
//     img: "SG0001 키보드.jpeg",
//     link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
//     regdate: "2024-08-29",
//     active: "삭제",
//   },
//   {
//     id: 3,
//     num: "4",
//     product: "MM Studio Class 0413- 898cc55 click",
//     comment:
//       "조선타자기 컨셉의 이런 저런 설명 쭉 나오고 쭉 설명 설명 설명 줄바뀜으로 나오면서 중앙정렬",
//     img: "SG0001 키보드.jpeg",
//     link: "https://www.youtube.com/watch?v=zo4f_B04-cE",
//     regdate: "2024-08-29",
//     active: "삭제",
//   },
// ];
const modalOption = [
  {
    label: "상품번호",
    field: "product_id",
    placeholder: "상품명을 입력해주세요",
    select: [1, 2, 3],
  },
  {
    label: "문구",
    field: "comment",
    placeholder: "내용을 입력해주세요",
    height: "160px",
    feildAlign: "start",
    textArea: true,
  },
  {
    label: "화보",
    field: "image",
    imgFile: true,
  },
];

const rows = ref([]);
const selectedData = ref(null);

watch(
  () => props.selectedId,
  (selectedId) => {
    if (selectedId !== null) {
      console.log("New selected ID:", selectedId);
    }
  }
);

const listClick = (id) => {
  // const data = await getProductListById(id);
  // selectedData.value = data;
  emit("selectedList", id);
};
const deleteBtn = (id) => {
  console.log(id);
};

const handleSubmit = async (formData) => {
  console.log("formData", formData);
  await enrollPictorialProduct(formData);
};

const fetchPictorialAllList = async () => {
  const data = await getMainPictorialList();
  if (data) {
    rows.value = data.map((item) => {
      return {
        ...item,
        // id: item.product_id,
        // amount: formattedPrice(item.amount) + "원",
        active: "삭제",
      };
    });
  } else {
    console.log("there is no data");
  }
};

onMounted(async () => {
  fetchPictorialAllList();
});
</script>

<style src="@/assets/css/adminMain/TableList.css" module></style>