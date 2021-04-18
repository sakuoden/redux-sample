import { FC } from 'react';
import Film from '../api/studio-gihbli/films/filmid/Film';

type Props = {
    amount?: number;
    plus?: (amount: number) => void;
    minus?: (amount: number) => void;
    requestFailed?: boolean;
    film?: Film;
};

const SamplePage: FC<Props> = ({ 
    amount = 0,
    plus = () => undefined,
    minus = () => undefined,
    requestFailed = false,
    film = null,
}) => {

    return (
        <div>
            <h1>🦞Redux Sample</h1>
            <p>Reduxで状態管理している数値: {amount}</p>
            <button onClick={() => plus(10)}>+</button>
            <button onClick={() => minus(5)}>-</button>

            <h1>🦞Redux Thunk Sample</h1>
            <h2><a href={"https://ghibliapi.herokuapp.com/#tag/Films%2Fpaths%2F~1films~1%7Bid%7D%2Fget"}>STUDIO GIHBLI API</a>のFILMSリソース</h2>
            <h3>Film ID: 58611129-2dbc-4a81-a72f-77ddfc1b1b49</h3>
            {requestFailed ? (
                <p>リクエストに失敗しました</p>
            ) : (
                <ul>
                    <li>タイトル: {film?.title}</li>
                    <li>オリジナルタイトル: {film?.original_title}</li>
                    <li>オリジナルタイトルローマ字表記: {film?.original_title_romanised}</li>
                    <li>内容: {film?.description}</li>
                    <li>監督: {film?.director}</li>
                    <li>プロデューサー: {film?.producer}</li>
                    <li>上映時間: {film?.running_time}</li>
                    <li>Rotten Tomatoesのスコア: {film?.rt_score}</li>
                </ul>   
            )}
        </div>
    );
}

export default SamplePage;
