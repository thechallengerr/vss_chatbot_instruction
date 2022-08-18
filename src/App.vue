<template>
  <div class="app">
    <Menu />
    <RouterView />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data: () => ({}),
  components: {
    Menu,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import "../src/assets/base.css";
:root {
  --primary: #ee0033;
}
.text-decoration-none {
  text-decoration: none;
}
.app {
  display: flex;
  flex-direction: column;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
@media (min-width: 1024px) {
}
</style>
