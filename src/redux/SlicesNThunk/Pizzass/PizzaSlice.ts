import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPizzas} from './PizzaThunk';

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

interface fetchPizzassState {
    items: pizzaItem[] | null;
    isLoading: boolean;
    error: any | null;
    category: number | null;
    sort: string | null;
}

const initialState: fetchPizzassState = {
    items: [],
    isLoading: false,
    error: null,
    category: null,
    sort: null,
};

const fetchPizzassSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload;
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.isLoading = true;
            state.items = null;
        });

        builder.addCase(fetchPizzas.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;
        });

        builder.addCase(fetchPizzas.rejected,
            (state, {payload}) => {

                state.isLoading = false;
                if (payload) state.error = payload;

            });
    },
});

export const {setCategory, setSort} = fetchPizzassSlice.actions

export default fetchPizzassSlice.reducer;
