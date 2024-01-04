<template>
  <footer class="footer">
    <ul class="footerNavList">
      <li class="footerNavItem">이용약관</li>
      <li class="footerNavItem personalInfo">개인정보처리방침</li>
      <li class="footerNavItem">이용안내</li>
    </ul>
    <div class="footerInfo">
      <div class="companyInfoWrapper">
        <div>
          <p class="companyInfo">
            상호명: 조선타자기 | 대표자: 정성엽 | 사업자등록번호:
            000-00-00000<br />
            통신판매신고번호: 2024-부산사상-00000 주통신판매신고번호소:
            부산광역시 백양대로 684 2F<br />
            고객센터: 051-000-0000 | 이메일: gameinscokr@naver.com
            개인정보보호책임자: 정성엽
          </p>

          <p class="copyright">Copyright 2023 조선타자기 All right reserved.</p>
        </div>
        <div class="inquiryWrapper">
          <h3 class="inquiryTitle">고객센터</h3>
          <p class="tel">051-000-0000</p>
          <p class="time">
            팩스&nbsp;&nbsp;&nbsp;&nbsp;000-0000-0000<br />
            이메일&nbsp;&nbsp;&nbsp;&nbsp;gameinscokr@naver.com<br />
            운영 시간 : 평일 09:00 ~ 18:00<br />주말 및 공휴일 휴무
          </p>
        </div>
      </div>
      <div class="followsWrapper">
        <h3 class="followsTitle">FOLLOW US</h3>
        <div class="follows">
          <button type="button" class="followBtn">
            <img :src="importedInstagram" alt="인스타그램" />
          </button>
          <button type="button" class="followBtn">
            <img :src="importedDiscord" alt="디스코드" />
          </button>
          <button type="button" class="followBtn">
            <img :src="importedNaver" alt="네이버" />
          </button>
          <button type="button" class="followBtn">
            <img :src="importedYoutube" alt="유튜브" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import instagram from "@/assets/images/instagram.svg";
import discord from "@/assets/images/discord.svg";
import naver from "@/assets/images/naver.svg";
import youtube from "@/assets/images/youtube.svg";

const importedInstagram = ref(instagram);
const importedDiscord = ref(discord);
const importedNaver = ref(naver);
const importedYoutube = ref(youtube);
</script>

<style scoped>
@import "./Footer.css";
</style>
