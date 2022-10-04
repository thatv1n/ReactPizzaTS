import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartType = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  types: number[] | null;
  sizes: number[] | null;
  count: number;
};

interface CartState {
  cart: CartType[] | [];
  price: number;
}

const initialState: CartState = {
  cart: [],
  price: 0
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart:(state,action)=>{
      const findItem= state.cart.find((item) => item.id === action.payload.id);
      const pizza : any = {...action.payload, count: 1} 
      findItem ? findItem.count++ : state.cart = [...state.cart, pizza];

      // const getPriceCart = state.cart.reduce((prev:number, curr:CartType) => prev + curr.price, 0);
    },
 
    minusCart:(state,action)=>{
      const findItem = state.cart.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((obj) => obj.id !== action.payload);
    },
    clearItems: (state) => {
      state.cart = [];
    },
  },

});

export const {addCart,minusCart,removeItem,clearItems} = CartSlice.actions

export default CartSlice.reducer;