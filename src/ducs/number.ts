import { Reducer } from "redux";

// State
export type NumberState = {
    amount: number
};

export const numberState: NumberState = { amount: 10 };

// Ations
export const NumberActionType = {
    UP: 'number/up',
    DOWN: 'number/down',
} as const;

type NumberActionType = typeof NumberActionType[keyof typeof NumberActionType];

export type NumberAction = {
    type: NumberActionType;
    amount: number;
};

// Reducer
export const numberReducer: Reducer<NumberState, NumberAction> = (
    state: NumberState = numberState,
    action: NumberAction
): NumberState => {
    switch(action.type) {
        case NumberActionType.UP:
            return {
                ...state,
                amount: state.amount + action.amount,
            };
        case NumberActionType.DOWN:
            return {
                ...state,
                amount: state.amount - action.amount,
            };
        default: {
            const _: never = action.type
            
            return state;
        }
    }
};

// Action Creator
export const plus = (addend: number): NumberAction => ({
    type: NumberActionType.UP,
    amount: addend,
});

export const minus = (subtrahend: number): NumberAction => ({
    type: NumberActionType.DOWN,
    amount: subtrahend,
});
