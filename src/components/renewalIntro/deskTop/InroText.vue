<template>
  <div :class="$style.wrapper">
    <div :class="$style.textBox">
      <p :class="$style.title">회사 소개</p>
    </div>
    <div :class="$style.sloganBox">
      <span :class="[$style.slogan, 'slogan']"> 타건의 즐거움을 더하다, </span>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

gsap.to(".slogan", { y: 50, duration: 1 });
</script>

<style src="@/assets/css/renewalIntro/deskTop/IntroText.css" module></style>
