<template>
  <section class="market">
    <span class="market-title">Рынок комплектующих</span>

    <ul class="market-list">
      <li v-for="item in market" :key="item.id">
        <article class="market-item">
          <div :class="`market-item-bg-${item.id}`"></div>
          <span class="market-item-title">{{ item.title }}</span>
          <span class="market-item-price"
            >Стоимость: {{ item.buyPrice }} монет</span
          >
          <button class="market-item-btn" @click="buy(item)">Установить</button>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Market",

  computed: {
    ...mapState({
      market: (state) => state.market,
    }),
  },
  methods: { ...mapMutations(["buy"]) },
};
</script>

<style>
.market {
  max-width: 886px;
  width: 100%;
  margin: 0 auto;
}

.market-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
}

.market-list {
  display: flex;
  justify-content: space-between;
}

.market-list li {
  list-style-type: none;
}

.market-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 236px;
}

.market-item-bg-1,
.market-item-bg-2 {
  width: 236px;
  height: 128px;
  filter: drop-shadow(0px 8px 90px #ff7f22);
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center;
  margin: 60px 0 25px 0;
}

.market-item-bg-1 {
  background-image: url("../assets/img/bg-1.png");
}

.market-item-bg-2 {
  background-image: url("../assets/img/bg-2.png");
}

.market-item-bg-3 {
  background-image: url("../assets/img/bg-3.png");
  width: 128px;
  height: 128px;
  filter: drop-shadow(0px 8px 90px #ff7f22);
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  margin: 60px 0 25px 0;
  border: 3px solid #ff7f22;
  border-radius: 50%;
}

.market-item-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin: 0 0 22px 0;
}

.market-item-price {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #a3b8cc;
}

.market-item-btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(180deg, #ff7f22 0%, #ff5722 100%);
  border-radius: 60px;
  padding: 12px 49px;
  margin: 30px 0 100px 0;
  border: 3px solid #ff7f22;
}

.market-item-btn:hover {
  background: #ff5722;
  border: 3px solid #ff5722;
}

.market-item-btn:active {
  background: #ff7f22;
  border: 3px solid #ff7f22;
}
</style>
