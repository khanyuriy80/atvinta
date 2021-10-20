<template>
  <section class="wallet">
    <p class="wallet-title">Кошелёк криптовалют</p>

    <div class="wallet-coins"></div>
    <img
      src="img/coin.png"
      alt="coin"
      v-for="(coin, index) in coinCount"
      :key="index"
    />
    <p class="wallet-subtitle">{{ coinCount }} biorobo монет</p>

    <div class="wallet-links">
      <button class="wallet-inks-btn" @click="addCoin">Нацыганить</button>

      <div class="wallet-checkbox">
        <input
          class="wallet-checkbox-input"
          type="checkbox"
          id="checkbox-1"
          :checked="isAddFiveCoin"
          @change="changeAddCoin"
        />
        <label class="wallet-checkbox-label" for="checkbox-1"
          >Цыганить по 5 монет</label
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Wallet",
  computed: {
    ...mapState({
      coinCount: (state) => state.coinCount,
      isAddFiveCoin: (state) => state.isAddFiveCoin,
    }),
  },
  methods: { ...mapMutations(["addCoin", "changeAddCoin"]) },
};
</script>

<style>
.wallet {
  max-width: 886px;
  width: 100%;
  margin: 0 auto;
  min-height: 340px;
}

.wallet-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
  margin: 0 0 60px 0;
}

.wallet-coins {
  margin: 0 0 24px 0;
  position: relative;
}

.wallet-coins img:not(:first-child) {
  position: absolute;
  left: -5px;
}

.wallet-subtitle {
  font-size: 24px;
  line-height: 24px;
  color: #a3b8cc;
  margin: 24px 0 44px 0;
}

.wallet-links {
  display: flex;
}

.wallet-inks-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ff7f22;
  background: #24303d;
  border: none;
  border-bottom: 1px solid #ff7f22;
  margin: 0 19px 0 0;
}

.wallet-checkbox {
  position: relative;
}

.wallet-checkbox-input {
  appearance: none;
  position: absolute;
}

.wallet-checkbox-label {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-left: 37px;
}

.wallet-checkbox-label::before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  border: 2px solid #a3b8cc;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-sizing: border-box;
}

.wallet-checkbox-label::after {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  background: url("../assets/img/wallet-galka.png");
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.wallet-checkbox-input:checked + .wallet-checkbox-label::before {
  background: url("../assets/img/wallet-galka.png");
  background-repeat: no-repeat;
  background-position: center;
}

.wallet-checkbox-input:checked + .wallet-checkbox-label::before {
  opacity: 1;
}
</style>
