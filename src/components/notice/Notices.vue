<template>
  <section class="wrapper">
    <table class="table">
      <tr>
        <th class="id head">번호</th>
        <th class="title head">제목</th>
        <th class="author head">작성자</th>
        <th class="createdDate head">작성일</th>
        <th class="views head">조회수</th>
      </tr>
      <Notice
        :id="4"
        title="이 집 키보드 맛집이네!"
        author="조선타자기"
        createdDate="2023-01-09"
        :views="1900"
      />
      <Notice
        :id="3"
        title="이 집 키보드 맛집이네!"
        author="조선타자기"
        createdDate="2023-01-09"
        :views="1900"
      />
      <Notice
        :id="2"
        title="이 집 키보드 맛집이네!"
        author="조선타자기"
        createdDate="2023-01-09"
        :views="1900"
      />
      <Notice
        :id="1"
        title="이 집 키보드 맛집이네!"
        author="조선타자기"
        createdDate="2023-01-09"
        :views="1900"
      />
    </table>
    <footer class="footer">
      <div></div>
      <div class="pagination">
        <PaginationLeftArrow class="paginationArrow" />
        <ul class="paginationList">
          <li class="paginationItem">1</li>
          <li class="paginationItem">2</li>
          <li class="paginationItem">3</li>
          <li class="paginationItem">4</li>
          <li class="paginationItem">5</li>
        </ul>
        <PaginationRightArrow class="paginationArrow" />
      </div>
      <button type="button" class="writeBtn">글쓰기</button>
    </footer>
  </section>
</template>

<script setup>
import Notice from "#/notice/Notice.vue";
import PaginationLeftArrow from "#/icons/PaginationLeftArrow.vue";
import PaginationRightArrow from "#/icons/PaginationRightArrow.vue";
</script>

<style src="./Notices.css" scoped></style>
