import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type pizzaItem = {
  id: number,
  imageUrl: string,
  name: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  raiting: number,
  count:  number,
};

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
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart:(state,action)=>{
      const findItem= state.cart.find((item) => item.id === action.payload.id);
      const pizza : any = {...action.payload, count: 1} 
      findItem ? findItem.count++ : state.cart = [...state.cart, pizza];
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