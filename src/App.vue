<template>
  <div id="app">
    <Header />
    <main>
      <Banner />
      <Wallet />
      <Market />
      <Warehouse />
      <Production />
    </main>
    <Modal />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Wallet from "@/components/Wallet.vue";
import Market from "@/components/Market.vue";
import Warehouse from "@/components/Warehouse.vue";
import Production from "@/components/Production.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    Wallet,
    Market,
    Warehouse,
    Production,
    Modal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1440px;
  margin: 0 auto;
  background: #24303d;
}
</style>
