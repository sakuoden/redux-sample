export const NumberActionType = {
    UP: 'UP',
    DOWN: 'DOWN',
} as const;

type NumberActionType = typeof NumberActionType[keyof typeof NumberActionType];

export type NumberAction = {
    type: NumberActionType;
    amount: number;
};
