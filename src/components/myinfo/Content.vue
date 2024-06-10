<template>
  <section>
    <CheckPassword @checkAccount="checkAccount" v-if="!checkAccountState" />
    <DeleteAccount v-if="checkAccountState && props.menuNum === 6" />
  </section>
</template>

<script setup>
import CheckPassword from "#/myinfo/CheckPassword.vue";
import DeleteAccount from "#/myinfo/DeleteAccount.vue";
import { ref, watchEffect } from "vue";

const props = defineProps({
  menuNum: Number,
});

const checkAccountState = ref(false);
watchEffect(() => {
  if (props.menuNum === 6) {
    checkAccountState.value = false;
  }
  if (props.menuNum === 4) {
    checkAccountState.value = false;
  }
});
const checkAccount = (event) => {
  checkAccountState.value = event;
};
</script>
<style src="@/assets/css/myinfo/Contents.css" module></style>
