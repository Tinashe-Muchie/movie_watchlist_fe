import React, {useContext} from 'react';
import {TvShow} from '../../../generated/tvshows';
import { NavLink } from 'react-router-dom';
import { Context } from '../../../Context/GlobalContext';

export const LAYOUT = ({show}: {show: TvShow}) => {

    const {addToWatchlist, addToWatched, myState } = useContext(Context);

    return (
        <li key={show.id}>   
            <div className='image_container'>
                {
                    (show.poster_path)? <img 
                        src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                        alt=''
                    />
                    : <div className='image_cover'></div>
                }
            </div>
            <div className='title_container'>
                <h4> {show.name} </h4>
                <h4> {show.first_air_date} </h4>
            </div>      
            <button
                className='watch_button'
                onClick={() => {
                    addToWatchlist(show)
                }}
                disabled={
                    myState?.Watchlist?.find((w: any) => w.id === show.id)? true
                    : myState?.Watched?.find((w: any) => w.id === show.id)? true
                    : false
                }
            >
            Add to Watchlist
            </button>
            <button
                className='watch_button'
                onClick={() => {
                    addToWatched(show)
                }}
                disabled={
                    myState?.Watched?.find((w: any) => w.id === show.id)? true
                    : false
                }
            >
            Add to Watched
            </button>
            <NavLink className='watch_button_navlink'
                to="/moviedetails"
                state={{
                    details: show.details,
                    reviews: show.reviews,
                    credits: show.credits,
                    videos: show.videos,
                    title: show.name,
                    id: show.id,
                    show: show
                }}
                >
                <button className='watch_button'>More Info</button>
            </NavLink>
        </li>
    );
}