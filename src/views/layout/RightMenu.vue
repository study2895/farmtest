<template>
  <div id="app" @click="closeMenu">
    <button @click.stop="toggleMenu" class="btn btn-primary">
      <img src="../../assets/images/togglemenu.svg" style="width: 35px" />
    </button>
    <!-- 클릭 이벤트 버블링 방지 -->
    <div :class="['slide-menu', { open: isMenuOpen }]" @click.stop>
      <!-- 클릭 이벤트 버블링 방지 -->
      <button class="close-btn" @click="closeMenu">
        <img
          src="../../assets/images/close-button.svg"
          alt="close"
          style="width: 25px"
        />
      </button>
      <!-- 나가기 버튼 -->

      <ul class="slider">
        <li class="mb-3 strong fs-4"><a href="#">홍길동님</a></li>
        <hr class="my-4 line" />
        <li class="mb-3"><a href="#">마이페이지</a></li>
        <li class="mb-3"><a href="#">알림함</a></li>
        <li class="mb-3"><a href="#">문의하기</a></li>
        <li class="mb-3"><a href="#">로그아웃</a></li>
        <li class="mb-3"><a href="#">탈퇴하기</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
#app {
  position: relative;
  overflow-x: hidden;
}

.line {
  border: 1px solid black; /* 진한 선 */
  border-color: black;
  margin-top: 10px;
  margin-left: 20%;
}

.slide-menu {
  position: fixed;
  top: 0;
  right: -350px; /* 메뉴가 숨겨진 상태에서 오른쪽으로 이동 */
  width: 350px;
  height: 100%;
  background-color: #ffffff;
  color: white;
  transition: right 0.3s ease;
  z-index: 1000; /* 버튼보다 우선 순위를 높이기 위해 추가 */
  box-shadow: -2px 0 10px rgba(111, 111, 111, 0.5); /* 왼쪽에 그림자 추가 */
}

.slide-menu.open {
  right: 0; /* 메뉴가 열리면 오른쪽으로 슬라이드 */
}

.slide-menu ul {
  list-style-type: none;
  padding: 20px;
}

.slide-menu ul li {
  margin: 10px 0;
}

.slide-menu ul li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.close-btn {
  /* 나가기 버튼 스타일 */
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  color: rgb(38, 38, 38);
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.content {
  padding: 20px;
}

.slider {
  margin-top: 14%;
  text-align: right;
  margin-right: 15%;
}

button {
  margin: 20px;
  padding: 10px 20px;
  background-color: #ffffff;
  color: rgb(37, 37, 37);
  border: none;
  cursor: pointer;
}

li.strong {
  font-weight: 700;
}
</style>
