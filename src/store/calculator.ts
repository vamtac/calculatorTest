import Vue from 'vue';
import Vuex, { MutationTree } from 'vuex';

Vue.use(Vuex);

interface CalculatorState {
  display: string;
  currentInput: string;
  currentOperation: string | null;
  error: string | null;
  memory: string | null;
}

const state: CalculatorState = {
  display: '0',
  currentInput: '0',
  currentOperation: null,
  error: null,
  memory: null,
  
};

const mutations: MutationTree<CalculatorState> = {
  appendNumber(state, number: number) {
    if (state.currentInput === '0' || state.currentInput === '-0') {
      state.currentInput = number.toString();
    } else {
      state.currentInput += number;
    }
    state.display = state.currentInput;
  },

  performOperation(state, operation: string) {
    if (state.currentOperation !== null) {
      mutations.calculate(state);
    }
    state.currentOperation = operation;
    state.currentInput += ` ${operation} `;
    state.display = state.currentInput;
  },

  calculate(state) {
    const expression = state.currentInput.split(' ');
    const num1 = parseFloat(expression[0]);
    const operator = expression[1];
    const num2 = parseFloat(expression[2]);

    if (!isNaN(num1) && !isNaN(num2) && operator) {
      switch (operator) {
        case '+':
          state.currentInput = (num1 + num2).toString();
          break;
        case '-':
          state.currentInput = (num1 - num2).toString();
          break;
        case '*':
          state.currentInput = (num1 * num2).toString();
          break;
        case '/':
          state.currentInput = (num1 / num2).toString();
          break;
        default:
          break;
      }
      state.display = state.currentInput;
      state.currentOperation = null;
    } else {
      mutations.setError(state, 'Invalid calculation');
    }
  },

  clear(state) {
    state.currentInput = '0';
    state.currentOperation = null;
    state.display = state.currentInput;
    state.error = null;
  },

  setError(state, error: string) {
    state.error = error;
  },
  storeInMemory(state, displayValue: string) {
    if (state.display !== '0') {
      Vue.set(state, 'memory', state.display);
    }
  },
  recallMemory(state) {
    if (state.memory !== null) {
      Vue.set(state, 'currentInput', state.memory);
      Vue.set(state, 'display', state.currentInput);
      Vue.set(state, 'currentOperation', null);
      Vue.set(state, 'error', null);
    }
  },
  clearMemory(state) {
    Vue.set(state, 'memory', null);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {},
});
