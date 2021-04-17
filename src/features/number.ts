import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NumberState = {
    amount: number;
};

const initialState: NumberState = { amount: 10 };

export const counterSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        up: (preState: NumberState, action: PayloadAction<number>) => ({
            ...preState,
            amount: preState.amount + action.payload,
        }),
        down: (preState: NumberState, action: PayloadAction<number>) => ({
            ...preState,
            amount: preState.amount - action.payload,
        }),
    },
});
