import { NumberActionType, plus, minus } from "../actions";
import { numberState } from "../reducer";

test('Dispatcherに渡すActionCreatorを用意する', () => {
    const plusActionCreator = plus;
    const minusActionCreator = minus;
    expect(plusActionCreator(10)).toStrictEqual({ type: NumberActionType.UP, amount: 10 });
    expect(minusActionCreator(5)).toStrictEqual({ type: NumberActionType.DOWN, amount: 5 });
});

test('NumberのStateの初期値を設定する', () => {
    expect(numberState).toStrictEqual({ value: 10 });
});
