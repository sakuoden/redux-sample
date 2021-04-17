import { NumberActionType, plus, minus, NumberAction } from "../features/number";
import { NumberState, numberState, numberReducer } from "../features/number";

test('Dispatcherに渡すActionCreatorを用意する', () => {
    const plusActionCreator = plus;
    const minusActionCreator = minus;
    expect(plusActionCreator(10)).toStrictEqual({ type: NumberActionType.UP, amount: 10 });
    expect(minusActionCreator(5)).toStrictEqual({ type: NumberActionType.DOWN, amount: 5 });
});

test('NumberのStateの初期値を設定する', () => {
    expect(numberState).toStrictEqual({ amount: 10 });
});

test('新しい状態を返すReducerを定義する。', () => {
    const prevNumberState: NumberState = numberState;

    const plusActionCreator = plus;
    const numberAction: NumberAction = plusActionCreator(10);

    const newNumberState: NumberState = numberReducer(prevNumberState, numberAction);

    expect(newNumberState).toStrictEqual({ amount: 20 });
})
