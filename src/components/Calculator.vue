<template>
  <div class="max-w-xs shadow-xl m-auto border-2 border-gray-300 rounded-2xl p-5">
    <div v-if="error" class="text-red-600 p-2">{{ error }}</div>
    <div class="mb-5 text-right text-gray-900 bg-gray-100 border border-gray-300 font-large rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 ">{{ displayCalculator }}</div>
    <div class="grid grid-cols-4 gap-2">
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('7')">7</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('8')">8</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('9')">9</button>
      <button class="text-gray-900 bg-gray-300 shadow-md focus:outline-none hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="performOperation('+')">+</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('4')">4</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('5')">5</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('6')">6</button>
      <button class="text-gray-900 bg-gray-300 shadow-md focus:outline-none hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="performOperation('-')">-</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('1')">1</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('2')">2</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('3')">3</button>
      <button class="text-gray-900 bg-gray-300 shadow-md focus:outline-none hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="performOperation('*')">*</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="clear()">C</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="appendNumber('0')">0</button>
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="calculate()">=</button>
      <button class="text-gray-900 bg-gray-300 shadow-md focus:outline-none hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="performOperation('/')">/</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="storeInMemory">M+</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="recallMemory">M</button>
      <button class="text-gray-900 bg-gray-100 shadow-md focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" @click="clearMemory">M-</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type NumberKey = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type OperationKey = "+" | "-" | "*" | "/";

interface CalculatorData {
  display: string;
  currentInput: string;
  currentOperation: OperationKey | null;
  error: string | null;
  memory: string | null;
}

export default Vue.extend({
  data(): CalculatorData {
    return {
      display: "0",
      currentInput: "",
      currentOperation: null,
      error: null,
      memory: null,
    };
  },
  computed: {
    displayCalculator(): string {
      return this.$store.state.display;
    },
  },

  methods: {
    appendNumber(number: NumberKey): void {
      this.$store.commit("appendNumber", number);
    },
    performOperation(operation: OperationKey): void {
      if (this.currentOperation !== null) {
        this.$store.commit("calculate");
      }
      this.$store.commit("performOperation", operation);
    },
    calculate(): void {
      this.$store.commit("calculate");
    },
    clear(): void {
      this.$store.commit("clear");
    },
    setError(error: string): void {
      this.error = error;
    },
    storeInMemory(): void {
      this.$store.commit("storeInMemory");
    },
    recallMemory(): void {
      this.$store.commit("recallMemory");
    },
    clearMemory(): void {
      this.$store.commit("clearMemory");
    },
  },
});
</script>
