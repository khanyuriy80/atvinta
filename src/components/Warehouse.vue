<template>
  <section class="warehouse">
    <span class="warehouse-title">Склад</span>
    <ul class="warehouse-list">
      <li v-for="item in warehouse" :key="item.id">
        <article class="warehouse-item">
          <span class="warehouse-item-title">{{ item.title }}</span>
          <span class="warehpuse-item-price"
            >Стоимость: {{ item.sellPrice }} монет</span
          >
          <span class="warehpuse-item-number">{{ item.count }} шт</span>
          <button class="warehouse-item-btn" @click="sell(item)">
            Продать
          </button>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Warehouse",

  computed: {
    ...mapState({
      warehouse: (state) => state.warehouse,
    }),
  },
  methods: { ...mapMutations(["sell"]) },
};
</script>

<style>
.warehouse {
  max-width: 886px;
  width: 100%;
  margin: 0 auto;
}

.warehouse-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
}

.warehouse-list {
  display: flex;
  justify-content: space-between;
}

.warehouse-list li {
  list-style-type: none;
}

.warehouse-item {
  display: flex;
  flex-direction: column;
  width: 236px;
}

.warehouse-item-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #ffffff;
  margin: 60px 0 7px 0;
}

.warehpuse-item-price {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #a3b8cc;
}

.warehpuse-item-number {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin: 15px 0 24px 0;
}

.warehouse-item-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #7cdaf9;
  border-radius: 60px;
  padding: 12px 49px;
  background-color: #24303d;
  border: 3px solid #7cdaf9;
}

.warehouse-item-btn:hover {
  color: #212529;
  background: #7cdaf9;
}

.warehouse-item-btn:active {
  background-color: #24303d;
  color: #7cdaf9;
}
</style>
