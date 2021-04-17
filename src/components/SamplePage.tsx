import { FC } from 'react';

type Props = {
    amount?: number;
    plus?: (amount: number) => void;
    minus?: (amount: number) => void;
};

const SamplePage: FC<Props> = ({ 
    amount = 0,
    plus = () => undefined,
    minus = () => undefined,
}) => {

    return (
        <div>
            <h1>Redux Sample</h1>
            <p>Reduxで状態管理している数値: {amount}</p>
            <br/>
            <button onClick={() => plus(10)}>+</button>
            <button onClick={() => minus(5)}>-</button>
        </div>
    );
}

export default SamplePage;
