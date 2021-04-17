import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FC, useReducer } from 'react';
import SamplePage from '../components/SamplePage';

type NumberState = {
    amount: number;
};
const initialState: NumberState = { amount: 0 };//createSliceの引数のオブジェクト型で利用する為のdummy

export const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        up: (preState: NumberState, action: PayloadAction<number>) => ({
            ...preState,
            amount: preState.amount + action.payload,
        }),
        down: (preState: NumberState, action: PayloadAction<number>) => ({
            ...preState,
            amount: preState.amount - action.payload,
        }),
    }
});

const EnhancedSamplePage: FC = () => {
    const [state, dispatch] = useReducer(numberSlice.reducer, { amount: 10 });
    const { up: plus, down: minus } = numberSlice.actions;

    return (
        <SamplePage 
            amount={state.amount}
            plus={(amount: number) => dispatch(plus(amount))}
            minus={(amount: number) => dispatch(minus(amount))}
        />
    )
}

export default EnhancedSamplePage;
