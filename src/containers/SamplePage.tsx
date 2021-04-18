import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../ducs/number';
import SamplePage from '../components/SamplePage';
import { Store } from '../ducs/root';

const EnhancedSamplePage: FC = () => {
    const amount = useSelector((store: Store) => store.numberState.amount);
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
