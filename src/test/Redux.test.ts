import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { NumberAction, NumberActionType, plus, minus } from "../actions";
import { numberState } from "../reducer";

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
}));

test('NumberActionTypeを定数を利用してNumberActionオブジェクトを作る', () => {
    const numberAction: NumberAction = {
        type: NumberActionType.UP,
        amount: 2
    };
});

test('Dispatcherに渡すActionCreatorを用意する', () => {
    const plusActionCreator = plus;
    const minusActionCreator = minus;
    expect(plusActionCreator(10)).toStrictEqual({ type: NumberActionType.UP, amount: 10 });
    expect(minusActionCreator(5)).toStrictEqual({ type: NumberActionType.DOWN, amount: 5 });
});

test('NumberのStateの初期値を設定する', () => {
    expect(numberState).toStrictEqual({ value: 10 });
});
