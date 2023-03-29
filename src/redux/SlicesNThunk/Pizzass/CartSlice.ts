import {createSlice} from '@reduxjs/toolkit';

type CartType = {
    id: number;
    imageUrl: string;
    name: string;
    typesPizza: any[];
    price: number;
    types: number[] | null;
    count: number;
};

interface CartState {
    cart: CartType[] | [];
    price: number;
    totalPrice: number;
}

const initialState: CartState = {
    cart: [],
    price: 0,
    totalPrice: 0
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const findItem = state.cart.find((item) => item.id === action.payload.id);
            const pizza: CartType = {...action.payload, count: 1}
            if (findItem) {
                findItem.count++
                const typePizza = {weight: action.payload.typesPizza[0].weight, size: action.payload.typesPizza[0].size}
                findItem.typesPizza.push(typePizza)
            } else {
                state.cart = [...state.cart, pizza];
            }
            const pizzas: CartType[] = state.cart
            state.totalPrice = pizzas.reduce((sum: number, obj: CartType) => obj.price * obj.count + sum, 0);
        },

        minusCart: (state, action) => {
            const findItem = state.cart.find((item) => item.id === action.payload);
            if (findItem) {
                findItem.count--;
                state.totalPrice = state.totalPrice - findItem.price
                if (findItem.typesPizza.length !== 0) {
                    findItem.typesPizza.pop()
                }
            }
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter((obj) => obj.id !== action.payload);
            state.totalPrice = 0;
            for (let index = 0; index < state.cart.length; index++) {
                state.totalPrice += state.cart[index].price;
            }
        },
        clearItems: (state) => {
            state.cart = [];
            state.totalPrice = 0;
        },
    },

});

export const {addCart, minusCart, removeItem, clearItems} = CartSlice.actions

export default CartSlice.reducer;