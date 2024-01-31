<template>
  <section>
    <table :class="$style.table">
      <tr>
        <th :class="[$style.id, $style.head]">번호</th>
        <th :class="[$style.title, $style.head]">제목</th>
        <th :class="[$style.author, $style.head]">작성자</th>
        <th :class="[$style.createdDate, $style.head]">작성일</th>
        <th :class="[$style.views, $style.head]">조회수</th>
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
    <footer :class="$style.footer">
      <div></div>
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
      <button type="button" :class="$style.writeBtn">글쓰기</button>
    </footer>
  </section>
</template>

<script setup>
import Notice from "#/notice/Notice.vue";
import IconPaginationLeftArrow from "#/icons/IconPaginationLeftArrow.vue";
import IconPaginationRightArrow from "#/icons/IconPaginationRightArrow.vue";
</script>

<style src="@/assets/css/notice/Notices.css" module></style>
