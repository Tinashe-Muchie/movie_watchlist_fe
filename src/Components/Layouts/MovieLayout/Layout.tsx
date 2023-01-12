import {useContext} from 'react';
import { Movie } from "../../../generated/graphql";
import { NavLink } from "react-router-dom";
import { Context } from '../../../Context/GlobalContext';

export const LAYOUT = ({movie}: {movie: Movie}) => {

    const {addToWatchlist, addToWatched, myState }= useContext(Context);
        
    return (
        <li key={movie.id}>   
            <div className='image_container'>
                {
                (movie.poster_path)? <img 
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=''
                />
                : <div className='image_cover'></div>
                }
            </div>
            <div className='title_container'>
                <h4> {movie.title} </h4>
                <h4> {movie.release_date} </h4>
            </div>  
            <button
                    className='watch_button'
                    onClick={() => {
                        addToWatchlist(movie)
                    }}
                    disabled={
                        myState?.Watchlist?.find((w: any) => w.id === movie.id)? true
                        : myState?.Watched?.find((w: any) => w.id === movie.id)? true
                        : false
                    }
                >
                Add to Watchlist
                </button>
                <button
                    className='watch_button'
                    onClick={() => {
                        addToWatched(movie)
                    }}
                    disabled={
                    myState?.Watched?.find((w: any) => w.id === movie.id)? true
                    : false
                    }
                >
                Add to Watched
                </button>
                <NavLink className='watch_button_navlink'
                    to="/moviedetails"
                    state={{
                        details: movie.details,
                            reviews: movie.reviews,
                            credits: movie.credits,
                            videos: movie.videos,
                            title: movie.title,
                            id: movie.id,
                            movie: movie
                    }} 
                >
                <button className='watch_button'>More Info</button>
                </NavLink>
        </li>
    );
}