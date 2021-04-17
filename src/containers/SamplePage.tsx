import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSlice } from '../features/number';
import { NumberState } from  '../features/number';
import SamplePage from '../components/SamplePage';

const EnhancedSamplePage: FC = () => {
    const amount = useSelector<NumberState, number>((state: NumberState) => state.amount);
    const dispatch = useDispatch();
    const { up: plus, down: minus } = counterSlice.actions;

    return (
        <SamplePage 
            amount={amount}
            plus={(amount: number) => dispatch(plus(amount))}
            minus={(amount: number) => dispatch(minus(amount))}
        />
    )
}

export default EnhancedSamplePage;
