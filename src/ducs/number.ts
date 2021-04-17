import { Reducer } from "redux";

// State
export const numberState: NumberState = { amount: 10 };

// Action Creator
export const plus = (addend: number): NumberAction => ({
    type: NumberActionType.UP,
    amount: addend,
});

export const minus = (subtrahend: number): NumberAction => ({
    type: NumberActionType.DOWN,
    amount: subtrahend,
});
