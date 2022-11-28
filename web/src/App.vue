<template>
  <div>
    <NavBar class="fixed top-0" style="z-index: 1" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    NavBar,
    Footer,
  },
});
</script>
