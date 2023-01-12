import React, {useContext} from 'react';
import { Context } from '../../Context/GlobalContext';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './watch.css';

export const Watched: React.FunctionComponent = () => {

    const {myState, removeFromWatched } = useContext(Context);
    
    return (
            <section className='watch_wrapper'>
                <h2 className='title'>
                    Tv Shows and Movies that you have watched
                </h2>
                <ul className='grid_container'>
                    { 
                        myState.Watched?.map((item: any)=> {
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
                                            removeFromWatched(item.id)
                                        }}
                                    >
                                        <RiDeleteBin5Line />
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