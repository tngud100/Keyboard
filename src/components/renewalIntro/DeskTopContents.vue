<template>
  <section>
    <IntroText />
    <Intro :introState="true" />
    <Value />
  </section>
</template>

<script setup>
import IntroText from "#/renewalIntro/deskTop/IntroText.vue";
import Intro from "#/renewalHome/deskTop/IntroDeskTop.vue";
import Value from "#/renewalIntro/deskTop/IntroValue.vue";
</script>
