<template>
  <div class="fullscreen-container">
    <TopMenu />
    <div class="content">
      <div class="menu-container">
        <div class="menu-item">주거</div>
        <div class="menu-item">교육</div>
        <div class="menu-item">문화</div>
        <div class="menu-item">의료</div>
        <div class="menu-item">상담</div>
        <div class="menu-item">금융지원</div>
      </div>
      <div class="comparison-container">
        <div class="mt-4 region-container">
          <h2 class="mt-2 fs-5">
            <img
              src="../assets/images/graycircle.svg"
              alt="gray circle"
              style="width: 15px"
            />&nbsp;&nbsp;<strong style="font-size: 15px"
              >현재 나의 지역</strong
            >
            서울특별시 구로구 복지
          </h2>

          <div class="welfare-box">주거복지1</div>
          <h2 class="top">
            <img
              src="../assets/images/redbutton.svg"
              alt="gray circle"
              style="width: 15px"
            />&nbsp;&nbsp; 더이상 받을 수 없어요
          </h2>
          <div class="redbox">
            <div class="welfare-box">주거복지2</div>
            <div class="welfare-box">주거복지2</div>
            <div class="welfare-box">주거복지2</div>
            <div class="welfare-box">주거복지2</div>
            <div class="welfare-box">주거복지2</div>
          </div>
        </div>
        <div class="mt-4 region-container">
          <h2 class="mt-2 fs-5">
            <img
              src="../assets/images/graycircle.svg"
              alt="gray circle"
              style="width: 15px"
            />&nbsp;&nbsp;<strong style="font-size: 15px">이사갈 지역</strong>
            경기도 수원시 복지
          </h2>
          <h2 class="top">
            <img
              src="../assets/images/bluebutton.svg"
              alt="gray circle"
              style="width: 15px"
            />&nbsp;&nbsp; 받고 있는 복지와 비슷해요
          </h2>
          <div class="bluebox">
            <div class="welfare-box">
              주거복지2 <button class="button">신청</button>
            </div>
            <div class="welfare-box">
              주거복지2 <button class="button">신청</button>
            </div>
            <div class="welfare-box">
              주거복지2 <button class="button">신청</button>
            </div>
          </div>
          <h2 class="top">
            <img
              src="../assets/images/greenbutton.svg"
              alt="gray circle"
              style="width: 15px"
            />&nbsp;&nbsp; 새로 받을 수 있어요
          </h2>
          <div class="greenbox">
            <div class="welfare-box">
              주거복지2 <button class="button">신청</button>
            </div>
            <div class="welfare-box">
              주거복지2 <button class="button">신청</button>
            </div>
            <div class="welfare-box">
              주거복지2 <button class="button">신청</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/global.css"
import TopMenu from "./components/TopMenu.vue"

export default {
  components: {
    TopMenu
  }
}
</script>

<style scoped>
@import "../assets/css/global.css";

body {
  font-family: "Pretendard-Regular", sans-serif;
}

.fullscreen-container {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
}

.content {
  text-align: center;
  padding: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);
  width: 1080px;
  margin-bottom: 100px;
}

/* 메뉴 컨테이너 스타일링 */
.menu-container {
  display: flex;
  justify-content: flex-start; /* 메뉴 항목을 왼쪽 정렬 */
  margin-bottom: 20px; /* 메뉴와 다른 컨텐츠 사이에 간격 추가 */
  border-bottom: 1px solid #6c6c6c; /* 연한 줄 추가 */
  padding-bottom: 20px; /* 줄과 메뉴 사이 간격 */
  font-size: large;
}

/* 메뉴 항목 스타일링 */
.menu-item {
  margin-right: 30px; /* 메뉴 항목 사이의 간격 */
  text-align: center;
  font-weight: 700; /* 두껍게 설정 */
  color: #1a1a1a; /* 텍스트 색상 */
  cursor: pointer; /* 클릭할 수 있음을 나타냄 */
}

.menu-item:last-child {
  margin-right: 0; /* 마지막 항목의 오른쪽 간격 제거 */
}

.menu-item:hover {
  color: #007bff; /* 메뉴 항목에 마우스를 올리면 색상 변경 */
}

/* 비교 컨테이너 스타일링 */
.comparison-container {
  display: flex;
  justify-content: space-between; /* 두 칸을 양쪽에 배치 */
  margin-top: 20px;
}

/* 지역 컨테이너 스타일링 */
.region-container {
  width: 48%; /* 두 칸이 나란히 배치되도록 너비 설정 */
  text-align: left;
}

/* 복지 박스 스타일링 */
.welfare-box {
  /*border: 1px solid #c8c8c8; */
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 18px;
  margin-right: 20px;
  border-radius: 5px; /* 둥근 모서리 */
  padding: 20px; /* 테두리에 그림자 추가 */
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.05);

  /* Flexbox 적용 */
  display: flex;
  justify-content: space-between; /* 컨텐츠를 좌우에 배치 */
  align-items: center; /* 세로로 가운데 정렬 */
}

div.redbox {
  background-color: #f5dbdb;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
}

div.bluebox {
  background-color: #d3e1f6;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
}
div.greenbox {
  background-color: #e3f6d3;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
}
.top {
  font-size: medium;
  margin-top: 10%;
}

strong {
  color: #1f72d3;
}

button.button {
  background-color: #9a999a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: smaller;
  padding: 5px 10px;
  transition: background-color 0.2s ease; /* 배경색 전환을 부드럽게 */
}

button.button:active {
  background-color: #cecece; /* 클릭 시 진해진 색상 */
}
</style>

<!-- 
//Bootstrap 버튼 종류
  <h1>Home</h1>
  <div class="btn btn-primary">Home</div>
  <div class="btn btn-danger">Home</div>
  <div class="btn btn-success">Home</div>
  <div class="btn btn-outline-primary">Home</div> 
  -->
