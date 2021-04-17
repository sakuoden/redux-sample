import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { down, up } from "./number-action";

export type NumberState = {
    amount: number;
};

const numberState: NumberState = { amount: 10 };

export const numberReducer = createReducer(numberState, {
    [up.type]: (preState: NumberState, action: PayloadAction<number>) => ({
        ...preState,
        amount: preState.amount + action.payload,
    }),
    [down.type]: (preState: NumberState, action: PayloadAction<number>) => ({
        ...preState,
        amount: preState.amount - action.payload,
    }),
});
