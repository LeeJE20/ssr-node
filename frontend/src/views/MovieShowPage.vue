<template>
  <div class="detail">
    <h1>{{ movie.name }}</h1>
    <img v-bind:src="movie.poster" class="poster" />
    <section>
      <h2>영화정보</h2>
      <dl class="info">
        <dt>감독</dt>
        <dd>{{ movie.director }}</dd>
        <dt>출연</dt>
        <dd>{{ movie.actors }}</dd>
        <dt>러닝타임</dt>
        <dd>{{ movie.time }}</dd>
      </dl>
    </section>
    <section>
      <h2>줄거리</h2>
      <p v-html="movie.synopsis" class="synopsis"></p>
    </section>
    <router-link :to="{ name: 'index', params: { id: movie.id } }" class="link"
      >돌아가기</router-link
    >
  </div>
</template>
<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    this.$axios.get("/api/movies/" + id).then((response) => {
      this.movie = response.data[0];
    });
  },
  data: function () {
    return {
      movie: {},
    };
  },
};
</script>
