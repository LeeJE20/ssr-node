<template>
  <transition name="modal" appear>
    <div class="modal-modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <slot name="content"></slot>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-modal",
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false,
    },
    title: {
      type: String,
      require: false,
    },
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    handleWrapperClick() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<!-- <style lang="scss"> -->
<style>
.modal-modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 0.1s ease-in-out;
}

.modal-window {
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: translateY(-20px);
}

.modal-content {
  padding: 10px 20px;
}

.modal-footer {
  background: rgb(211, 255, 254);
  padding: 10px;
  text-align: right;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
/* .modal-window {
  opacity: 0;
  transform: translateY(-20px);
} */
</style>
