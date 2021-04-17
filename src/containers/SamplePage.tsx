import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../ducs/number';
import SamplePage from '../components/SamplePage';
import { Reducer } from 'redux';

const NumberActionType = {
    up: 'number/up',
    down: 'number/down',
};

type NumberActionType = typeof NumberActionType[keyof typeof NumberActionType];

type NumberAction = {
    type: NumberActionType,
    payload?: number;
};

type NumberState = {
    amount: number;
};

const numberReducer = (
    preState: NumberState,
    action: NumberAction,
): NumberState => {
    switch (action.type) {
        case NumberActionType.up:
            return {
                ...preState,
                amount: preState.amount + (action.payload ?? 0),
            };
        case NumberActionType.down:
            return {
                ...preState,
                amount: preState.amount - (action.payload ?? 0),
            };
        default: {
            const _: never = action.type

            return preState;
        }
    }
};

const plus = (payload: number) => ({
    type: NumberActionType.up,
    payload,
});

const minus = (payload: number) => ({
    type: NumberActionType.down,
    payload,
});

const EnhancedSamplePage: FC = () => {
    const amount = useSelector<NumberState, number>((state: NumberState) => state.amount);
    const dispatch = useDispatch();

    return (
        <SamplePage 
            amount={amount}
            plus={(amount: number) => dispatch(plus(amount))}
            minus={(amount: number) => dispatch(minus(amount))}
        />
    )
}

export default EnhancedSamplePage;
