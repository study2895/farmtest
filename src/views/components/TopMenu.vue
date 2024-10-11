<template>
  <div class="container custom-mb">
    <h1 class="text-center main fs-3">
      <span class="highlight-text">지역별 복지서비스</span> 비교
    </h1>
    <div class="d-flex justify-content-center">
      <button
        class="mx-3 btn btn-primary"
        :class="{ 'btn-secondary': isMyServiceClicked }"
        @click="selectButton('myService')"
      >
        <strong>MY 복지서비스</strong> 확인
      </button>
      <button
        class="mx-3 btn btn-primary"
        :class="{ 'btn-secondary': isAllServiceClicked }"
        @click="selectButton('allService')"
      >
        <strong>전체 복지서비스</strong> 확인
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMyServiceClicked: false,
      isAllServiceClicked: false
    }
  },
  methods: {
    selectButton(service) {
      if (service === "myService") {
        this.isMyServiceClicked = !this.isMyServiceClicked
        this.isAllServiceClicked = false // 다른 버튼의 선택을 해제
      } else if (service === "allService") {
        this.isAllServiceClicked = !this.isAllServiceClicked
        this.isMyServiceClicked = false // 다른 버튼의 선택을 해제
      }
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

.custom-mb {
  margin-bottom: 6rem; /* 여기에 원하는 margin-bottom 값 설정 */
}

.btn {
  font-size: 19px;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  width: 18.5rem;
  height: 3.5rem;
  gap: 0px;
  border-radius: 25px;
  opacity: 0px;
}

.btn-primary {
  background-color: #9a999a;
  border-color: #9a999a;
}

.btn-secondary {
  background-color: #1f72d3;
  border-color: #1f72d3;
}

.main {
  margin-bottom: 3rem; /* 제목과 버튼 사이 간격 */
}

h1.main {
  font-family: "Noto Sans KR", sans-serif; /* 정의한 폰트 사용 */
  font-weight: 700;
}

strong {
  font-weight: 500;
}
</style>
