import { configureStore, createSlice } from '@reduxjs/toolkit';

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    hasPepperoni: false,
    hasSausage: false,
  },
  reducers: {
    addPepperoni(state, action) {
      state.hasPepperoni = true;
    },
    removePepperoni(state, action) {
      state.hasPepperoni = false;
    },
    addSausage(state, action) {
      state.hasSausage = true;
    },
    removeSausage(state, action) {
      state.hasSausage = false;
    },
  },
});

export const { addPepperoni, addSausage, removePepperoni, removeSausage } =
  pizzaSlice.actions;

export const store = configureStore({
  reducer: {
    pizza: pizzaSlice.reducer,
  },
});

const CHEESE_PIZZA_IMAGE = 'assets/cheese_pizza.jpeg';
const PEPPERONI_PIZZA_IMAGE = 'assets/pepperoni_pizza.jpeg';
const SAUSAGE_PIZZA_IMAGE = 'assets/sausage_pizza.jpeg';
const PEPPERONI_AND_SAUSAGE_PIZZA_IMAGE =
  'assets/sausage_and_pepperoni_pizza.jpeg';

interface PizzaState {
  pizza: {
    hasPepperoni: boolean;
    hasSausage: boolean;
  };
}

function determineImageUrl({
  pizza: { hasPepperoni, hasSausage },
}: PizzaState): string {
  if (hasPepperoni && hasSausage) {
    return PEPPERONI_AND_SAUSAGE_PIZZA_IMAGE;
  } else if (hasPepperoni) {
    return PEPPERONI_PIZZA_IMAGE;
  } else if (hasSausage) {
    return SAUSAGE_PIZZA_IMAGE;
  } else {
    return CHEESE_PIZZA_IMAGE;
  }
}

const STARTING_PRICE = 12;
const PEPPERONI_PRICE = 3;
const SAUSAGE_PRICE = 2.5;
function determinePrice({
  pizza: { hasPepperoni, hasSausage },
}: PizzaState): number {
  return (
    STARTING_PRICE +
    (hasPepperoni ? PEPPERONI_PRICE : 0) +
    (hasSausage ? SAUSAGE_PRICE : 0)
  );
}

export const selectPizzaImage = (pizzaState: PizzaState) =>
  determineImageUrl(pizzaState);

export const selectPizzaPrice = determinePrice;
export const selectHasPepperoni = (pizzaState: PizzaState) =>
  pizzaState.pizza.hasPepperoni;
export const selectHasSausage = (pizzaState: PizzaState) =>
  pizzaState.pizza.hasSausage;
