import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../api/api';

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


export const fetchPizzas = createAsyncThunk('main/pizzas', async (obj: object) => {
    const data: pizzaItem[] = await api.fetchPizzas(obj);
    return data;
});
