<template>
  <div class="wrap">
    <h1>db connect</h1>
    <button @click="getData">데이터 가져오기</button>
    <p>{{ data }}</p>
  </div>
</template>
<script>
export default {
  created() {
    console.log("db page opened");
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getData() {
      this.$axios.get("/api/reservation/room").then((response) => {
        this.data = response.data;
      });
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
