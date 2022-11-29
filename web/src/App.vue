<template>
  <div>
    <NavBar class="fixed top-0" style="z-index: 1" />
    <router-view />
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const showFooter = computed(() => route.name !== "MbtiMode");
</script>

<script>
import { computed, defineComponent } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    NavBar,
    Footer,
  },
});
</script>
