<template>
  <div>
    <button @click="openModal">열기</button>
    <app-my-modal
      title="This is modal"
      v-if="this.visible"
      @close="visible = false"
    >
      <!-- default 슬롯 콘텐츠 -->
      <template v-slot:content>
        <p>Vue.js Modal Window!</p>
        <div><input v-model="message" /></div>
      </template>
      <!-- /default -->
      <!-- footer 슬롯 콘텐츠 -->
      <template v-slot:footer>
        <!-- <button @click="doSend">제출</button>
        <button @click="visible = false">닫기</button> -->
      </template>
      <!-- /footer -->
    </app-my-modal>
    <h1>내용</h1>
    <h1>내용</h1>
    <h1>내용</h1>
    <h1>내용</h1>
    <h1>내용</h1>
    <h1>내용</h1>
    <h1>내용</h1>
  </div>
</template>

<script>
import myModal from "./../components/MyModal";
export default {
  name: "home-page",
  data() {
    return {
      visible: false,
      message: "",
    };
  },
  components: {
    appMyModal: myModal,
  },
  methods: {
    openModal() {
      this.visible = !this.visible;
      console.log(this.visible);
    },
  },
};
</script>

<style></style>
