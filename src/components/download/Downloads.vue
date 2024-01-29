<template>
  <section>
    <table :class="$style.table">
      <tr>
        <th :class="[$style.id, $style.head]">번호</th>
        <th :class="[$style.category, $style.head]">카테고리</th>
        <th :class="[$style.title, $style.head]">제목</th>
        <th :class="[$style.author, $style.head]">작성자</th>
        <th :class="[$style.createdDate, $style.head]">작성일</th>
      </tr>
      <Download
        :id="3"
        category="메뉴얼"
        title="이 집 키보드 맛집이네!"
        author="조선타자기"
        createdDate="2023-01-09"
      />
      <Download
        :id="2"
        category="소프트웨어"
        title="이 집 키보드 맛집이네!"
        author="조선타자기"
        createdDate="2023-01-09"
      />
      <Download
        :id="1"
        category="문제해결"
        title="이 집 키보드 맛집이네!"
        author="조선타자기"
        createdDate="2023-01-09"
      />
    </table>
    <footer :class="$style.footer">
      <div :class="$style.pagination">
        <IconPaginationLeftArrow :class="$style.arrow" />
        <ul :class="$style.paginationList">
          <li :class="$style.paginationItem">1</li>
          <li :class="$style.paginationItem">2</li>
          <li :class="$style.paginationItem">3</li>
          <li :class="$style.paginationItem">4</li>
          <li :class="$style.paginationItem">5</li>
        </ul>
        <IconPaginationRightArrow :class="$style.arrow" />
      </div>
    </footer>
  </section>
</template>

<script setup>
import Download from "#/download/Download.vue";
import IconPaginationLeftArrow from "#/icons/IconPaginationLeftArrow.vue";
import IconPaginationRightArrow from "#/icons/IconPaginationRightArrow.vue";
</script>

<style src="./Downloads.css" module></style>
