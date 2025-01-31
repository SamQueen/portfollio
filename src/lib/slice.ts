import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/lib/store'

// Define a type for the slice state
export interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
});

export const focusNavSlice = createSlice({
  name: "focusNav",
  initialState: false, // default state
  reducers: {
    toggleNav: (state) => !state,
    enableNav: () => true,
    disableNav: () => false,
  }
});

export const focusSlideSlice = createSlice({
  name: "focusSlide",
  initialState: true, // default state
  reducers: {
    toggleSlide: (state) => !state,
    enableSlide: () => true,
    disableSlide: () => false,
  }
});

export const focusBottomSlice = createSlice({
  name: "focusSlide",
  initialState: false, // default state
  reducers: {
    toggleBottom: (state) => !state,
    enableBottom: () => true,
    disableBottom: () => false,
  }
});

export const activeSectionSlice = createSlice({
  name: "activeSection",
  initialState: "",
  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      return action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { toggleNav, enableNav, disableNav } = focusNavSlice.actions;
export const { toggleSlide, enableSlide, disableSlide } = focusSlideSlice.actions;
export const { toggleBottom, enableBottom, disableBottom } = focusBottomSlice.actions;
export const { setSection } = activeSectionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer