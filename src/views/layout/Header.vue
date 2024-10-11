<template>
  <nav class="bg-white navbar navbar-expand-lg custom-header">
    <div
      class="container-1080 d-flex justify-content-between align-items-center"
    >
      <a class="navbar-brand" href="#">
        <img
          src="../../assets/images/logo.svg"
          alt="Logo"
          style="height: 35px"
          bottom-margin="10px"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="mt-2 collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="mb-2 navbar-nav me-auto mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">복지 비교하기</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">주거복지 공고</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">자주하는 질문</a>
          </li>
        </ul>
        <img
          src="../../assets/images/profile.svg"
          alt="Logo"
          style="height: 28px"
        />
        <p class="mt-3 spaced-text">정예빈님</p>

        <RightMenu :isMenuVisible="isMenuVisible" @close="toggleMenu" />
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue"
import RightMenu from "./RightMenu.vue"

export default {
  components: {
    RightMenu
  },
  setup() {
    const isMenuVisible = ref(false) // 상태를 ref로 선언

    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value // 상태를 토글
    }

    return {
      isMenuVisible,
      toggleMenu
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/global.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

#app {
  margin-bottom: 0.4%;
}

/* 드롭다운 위의 점 제거 */
.nav-link.dropdown-toggle::after {
  display: none; /* 기본 화살표 제거 */
}

.ul.navbar-nav {
  font-size: smaller;
}

.navbar-nav .nav-link {
  font-weight: 700;
  font-size: 1rem;
  transition: color 0.3s ease; /* 부드러운 전환 효과 */
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link:focus,
.navbar-nav .nav-link.active {
  color: rgb(148, 186, 90); /* 선택 시 글자 색상 */
}

.navbar {
  padding: 0.4%;
}

.custom-header {
  margin-bottom: 1rem; /* 필요한 만큼 간격을 조정 */
  padding: 0.5rem 1rem; /* 헤더의 패딩을 줄여서 크기를 줄임 */
}
</style>
