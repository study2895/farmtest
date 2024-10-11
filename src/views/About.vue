<template>
  <div>
    <h1>Welfare Services Data</h1>
    <table>
      <thead>
        <tr>
          <th>서비스명</th>
          <th>서비스상세내용</th>
          <th>기관명</th>
          <th>지원유형</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(service, index) in services" :key="index">
          <td>{{ service.servNm }}</td>
          <td>{{ service.servDgst }}</td>
          <td>{{ service.inqOrgNm }}</td>
          <td>{{ service.servDtlLink }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      services: []
    }
  },
  methods: {
    async fetchWelfareData() {
      const apiKey =
        'EVTsGjdsoUlBtJTpdh%2FitgFJXzeeNK%2FBP4lN8my%2Bi9AaoLGNln1kqRcyVP7CVRY8GsiXkX%2BOMl2HviEvq6hlfQ%3D%3D'
      const url = `http://apis.data.go.kr/B554287/NationalWelfareInformations/NationalWelfaredetailedinfo?serviceKey=${apiKey}&numOfRows=10&pageNo=1&_type=json`

      try {
        const response = await axios.get(url)
        this.services = response.data.response.body.items.item
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }
  },
  mounted() {
    this.fetchWelfareData()
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}
</style>
