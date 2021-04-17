import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../ducs/number';
import SamplePage from '../components/SamplePage';
import { NumberState } from '../ducs/number';

const NumberActionType = {
    up: 'number/up',
    down: 'number/down',
};

type NumberActionType = typeof NumberActionType[keyof typeof NumberActionType];

export type NumberAction = {
    type: NumberActionType,
    payload?: number;
};

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
