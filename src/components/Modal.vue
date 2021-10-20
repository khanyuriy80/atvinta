<template>
  <div class="my-modal" :class="modalVisible && 'my-modal-visible'">
    <div class="my-modal-dialog">
      <div class="cross" @click="hideModal">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.05024 5.63604L5.63603 7.05025L10.5858 12L5.63603 16.9497L7.05024 18.364L12 13.4142L16.9497 18.364L18.3639 16.9497L13.4142 12L18.3639 7.05025L16.9497 5.63604L12 10.5858L7.05024 5.63604Z"
            fill="#FF7F22"
          />
        </svg>
      </div>
      <img class="popup-content-img" src="img/coin.png" alt="coin" />
      <div class="popup-content-info">
        <div class="popup-title">Количество монет ограничено</div>
        <div class="popup-txt">
          Вы не можете нацыганить более 100 монет biorobo
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Modal",

  computed: {
    ...mapState({
      modalVisible: (state) => state.modalVisible,
    }),
  },
  methods: { ...mapMutations(["showModal", "hideModal"]) },
};
</script>

<style>
.popup {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
}

.popup-body {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  opacity: 0.3;
  z-index: 2;
}

.popup-coin {
  position: absolute;
}

.fas {
  text-decoration: none;
  color: #ff7f22;
  position: absolute;
  top: 13px;
  right: 13px;
}

.popup-content-img {
  width: 43px;
  height: 52px;
  position: absolute;
  bottom: 134px;
  left: 39px;
}

.popup-content-info {
  width: 320px;
  height: 160px;
  padding: 33px 70px 40px 106px;
}

.popup-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #212529;
  margin: 0 0 30px 0;
}

.popup-txt {
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #4c5865;
}

.my-modal {
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  background-color: rgba(6, 15, 49, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.my-modal-dialog {
  width: 496px;
  height: 240px;
  border-radius: 10px;
  margin: auto;
  position: relative;
  background: #ffffff;
}

.my-modal-visible {
  display: flex;
}

.cross {
  position: absolute;
  top: 13px;
  right: 13px;
}
</style>
