import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../features/number';
import SamplePage from '../components/SamplePage';
import { NumberState } from '../features/number';

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
