import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type pizzaItem = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  raiting: number;
};

interface CartState {
  cart: pizzaItem[] | [];
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart:(state,action)=>{
      state.cart = [...state.cart, action.payload];
    },
    
  },

});

export const {addCart} = CartSlice.actions

export default CartSlice.reducer;