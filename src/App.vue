<!-- App.vue -->
<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Calculator from "./components/Calculator.vue";

export default Vue.extend({
  components: {
    Calculator,
  },
});
</script>

<style src="./index.css"></style>
