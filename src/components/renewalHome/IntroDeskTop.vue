<template>
  <div :class="$style.introWrapper">
    <div :class="$style.introContents">
      <div :class="$style.logoContainer">
        <img src="" alt="introLogo" />
        <p>조선타자기는</p>
      </div>
      <div :class="$style.textContainer">
        <p>높은 접근성을 추구하는 키보드회사입니다.</p>
        <p>소비자분들과의 양방향 소통으로</p>
        <p>여러분의 의견을 담은 제품과 개선되는 서비스를 제공합니다.</p>
      </div>
    </div>
    <button :class="$style.introBtn">회사소개</button>
    <div :class="$style.infiniteImage">
      <img
        src=""
        alt="introImg"
        v-for="(item, index) in imgList"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup>
</script>

<style src="@/assets/css/renewalHome/IntroDeskTop.css" module></style>