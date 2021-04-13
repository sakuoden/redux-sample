import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { NumberAction, NumberActionType, plus, minus } from "../actions";

jest.mock('react-redux', () => ({
    useDispatch: () => jest.fn(),
}));

test('NumberActionTypeを定数を利用してNumberActionオブジェクトを作る', () => {
    const numberAction: NumberAction = {
        type: NumberActionType.UP,
        amount: 2
    };
});

test('DispatcherにActionCreatorを渡す', () => {
    const dispatch: Dispatch<NumberAction> = useDispatch();
    const dispatchPlus: any = () => dispatch(plus(10));
    const dispatchMinus: any = () => dispatch(minus(5));
});
