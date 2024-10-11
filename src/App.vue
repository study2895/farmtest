<template>
  <div id="app">
    <!-- 헤더 컴포넌트 -->
    <Header />
    <!-- 페이지 콘텐츠를 담을 main 영역 -->
    <main>
      <!-- 라우터 뷰: 현재 라우트의 컴포넌트가 여기에 렌더링됨 -->
      <router-view />
    </main>
    <!-- 푸터 컴포넌트 -->
    <Footer />
  </div>
</template>

<script>
import Header from "./views/layout/Header.vue"
import Footer from "./views/layout/Footer.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import "./assets/css/global.css";
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

#app {
  font-family: "Noto Sans KR", sans-serif;
}

body {
  font-family: "Inter", sans-serif;
}
</style>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  //min-height: 100vh; /* viewport의 전체 높이를 차지 */

  > header {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  > main {
    flex-grow: 1;
    padding-top: 20%; /* 헤더와 겹치지 않도록 패딩 추가 */
  }

  > footer {
    margin-top: 30rem; /* footer를 #app의 맨 아래로 보냄 */
  }
}
</style>
