import React, {useContext} from 'react';
import { Context } from '../../Context/GlobalContext';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './watch.css';

export const Watchlist: React.FunctionComponent = () => {

    const {myState, removeFromWatchlist, addToWatched} = useContext(Context);
    
    return (
            <section className='watch_wrapper'>
                <h2 className='title'>
                    Movies and Tv Shows that you want to watch 
                </h2>
                <ul className='grid_container'>
                    { 
                        myState.Watchlist?.map((item: any)=> {
                            return (
                                <li key={item.id}>
                                       
                                <div className='image_container'>
                                {
                                    (item.poster_path)? <img 
                                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                        alt=''
                                    />
                                    : <div className='image_cover'></div>
                                }
                                </div>
                                <div className='title_container'>
                                    {
                                        (item.__typename === 'Movies')? <h4>
                                            {item.title}
                                        </h4>
                                        : (item.__typename === 'TvShows') ? <h4>
                                            {item.name}
                                        </h4>
                                        : (item.__typename === 'Movie')? <h4>
                                            {item.title}
                                        </h4>
                                        : (item.__typename === 'TvShow') ? <h4>
                                            {item.name}
                                        </h4>
                                        : null
                                    }
                                    {
                                        (item.__typename === 'Movies')? <h4>
                                            {item.release_date}
                                        </h4>
                                        : (item.__typename === 'TvShows') ? <h4>
                                            {item.first_air_date}
                                        </h4>
                                        : (item.__typename === 'Movie')? <h4>
                                            {item.release_date}
                                        </h4>
                                        : (item.__typename === 'TvShow') ? <h4>
                                            {item.first_air_date}
                                        </h4>
                                        : null
                                    } 
                                    </div> 
                                    <button
                                        className='watch_button'
                                        onClick={() => {
                                            removeFromWatchlist(item.id)
                                        }}
                                    >
                                        <RiDeleteBin5Line />
                                    </button>
                                    <button
                                        className='watch_button'
                                        onClick={() => {
                                            addToWatched(item)
                                            removeFromWatchlist(item.id)
                                        }}
                                    >
                                        Add to Watched
                                    </button>
                                    {
                                        (item.__typename === 'Movies')? <NavLink
                                        className='watch_button_navlink'
                                        to="/moviedetails"
                                        state={{
                                            details: item.details,
                                                credits: item.credits,
                                                videos: item.videos,
                                                id: item.id,
                                                reviews: item.reviews
                                        }}
                                    >
                                        <button
                                            className='watch_button'
                                        >More Info</button>
                                    </NavLink>
                                    : (item.__typename === 'Movie')? <NavLink
                                        className='watch_button_navlink'
                                        to="/moviedetails"
                                        state={{
                                            details: item.details,
                                            credits: item.credits,
                                            videos: item.videos,
                                            id: item.id,
                                            reviews: item.reviews
                                        }}
                                    >
                                        <button
                                            className='watch_button'
                                        >More Info</button>
                                    </NavLink>
                                    :(item.__typename === 'TvShows') ? <NavLink
                                        className='watch_button_navlink'
                                        to="/tvshowdetails"
                                        state={{
                                            details: item.details,
                                            reviews: item.reviews,
                                            videos: item.videos,
                                            id: item.id,
                                            credits: item.credits
                                        }}
                                    >
                                        <button
                                            className='watch_button'
                                        >More Info</button>
                                    </NavLink>
                                    : (item.__typename === 'TvShow') ? <NavLink
                                        className='watch_button_navlink'
                                        to="/tvshowdetails"
                                        state={{
                                            details: item.details,
                                                reviews: item.reviews,
                                                videos: item.videos,
                                                id: item.id,
                                                credits: item.credits
                                        }}
                                    >
                                        <button
                                            className='watch_button'    
                                        >More Info</button>
                                    </NavLink>
                                    : null
                                    } 
                                </li>
                            );
                        })
                    }
                </ul>
            </section>
    );
}