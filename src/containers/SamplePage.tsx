import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from '../ducs/number';
import SamplePage from '../components/SamplePage';
import { Store } from '../ducs/root';
import { FilmState, getFilm } from '../ducs/films';

const EnhancedSamplePage: FC = () => {
    const amount: number = useSelector((store: Store) => store.numberState.amount);
    const filmState: FilmState = useSelector((store: Store) => store.filmState);
    const dispatch = useDispatch();

    const filmId = "58611129-2dbc-4a81-a72f-77ddfc1b1b49";

    useEffect(() => {
        dispatch(getFilm(filmId));
    }, []);

    return (
        <SamplePage 
            amount={amount}
            plus={(amount: number) => dispatch(plus(amount))}
            minus={(amount: number) => dispatch(minus(amount))}
            filmId={filmId}
            requestFailed={filmState.requestFailed}
            film={filmState.film}
        />
    )
}

export default EnhancedSamplePage;
