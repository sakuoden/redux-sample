export const NumberActionType = {
    UP: 'UP',
    DOWN: 'DOWN',
} as const;

type NumberActionType = typeof NumberActionType[keyof typeof NumberActionType];

export type NumberAction = {
    type: NumberActionType;
    amount: number;
};

export const plus = (addend: number): NumberAction => ({
    type: NumberActionType.UP,
    amount: addend,
});

export const minus = (subtrahend: number): NumberAction => ({
    type: NumberActionType.DOWN,
    amount: subtrahend,
});
