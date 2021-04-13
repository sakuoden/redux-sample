import { Reducer } from "react";
import { NumberAction, NumberActionType } from "./actions";

export type NumberState = {
    value: number
};

export const numberState: NumberState = { value: 10 };

export const numberReducer: Reducer<NumberState, NumberAction> = (
    state: NumberState = numberState,
    action: NumberAction
): NumberState => {
    switch(action.type) {
        case NumberActionType.UP:
            return {
                ...state,
                value: state.value + action.amount,
            };
        case NumberActionType.DOWN:
            return {
                ...state,
                value: state.value - action.amount,
            };
        default: {
            const _: never = action.type
            
            return state;
        }
    }
};
