import { NumberAction, NumberActionType } from "../actions";

test('NumberActionTypeを定数を利用してNumberActionオブジェクトを作る', () => {
    const numberAction: NumberAction = {
        type: NumberActionType.UP,
        amount: 2
    };
});
