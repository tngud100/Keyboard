<template>
  <section class="wrapper">
    <table class="table">
      <tr>
        <th class="id head">번호</th>
        <th class="category head">카테고리</th>
        <th class="title head">제목</th>
        <th class="author head">작성자</th>
        <th class="createdDate head">작성일</th>
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
    <footer class="footer">
      <div class="pagination">
        <IconPaginationLeftArrow class="paginationArrow" />
        <ul class="paginationList">
          <li class="paginationItem">1</li>
          <li class="paginationItem">2</li>
          <li class="paginationItem">3</li>
          <li class="paginationItem">4</li>
          <li class="paginationItem">5</li>
        </ul>
        <IconPaginationRightArrow class="paginationArrow" />
      </div>
    </footer>
  </section>
</template>

<script setup>
import Download from "#/download/Download.vue";
import IconPaginationLeftArrow from "#/icons/IconPaginationLeftArrow.vue";
import IconPaginationRightArrow from "#/icons/IconPaginationRightArrow.vue";
</script>

<style src="./Downloads.css" scoped></style>
