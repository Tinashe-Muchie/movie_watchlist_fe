import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { QueryQuery } from '../../generated/search';
import { Context } from '../../Context/GlobalContext';
import { Movies, TvShows } from '../../generated/gql';
import {NavLink} from 'react-router-dom';
import './search.css';

function Search() {

    const { SEARCH, addToWatchlist, addToWatched, myState} = useContext(Context);
    const { loading, error, data } = useQuery<QueryQuery>(SEARCH);
    const dataSearch = data?.search;
    /*create a new array that will be used to display skeletons 
    while a search is loading*/
    const newArray: number[] = [];
    for(let i:number = 1; i <= 12; i++) {
        newArray.push(i);
    }

    type T = Movies | TvShows;
    
    return (
        <section className='search_wrapper'>
            <ul className='grid_container'>
                    {
                        loading ? newArray?.map((item, index)=> {
                            return(
                                <li key={index}>
                                    <div className='skeleton'></div>
                                </li>
                            );
                        })
                        : error ? <h4>Oh no! {error.message}. Try the search again.</h4>
                        : dataSearch?.map((item) => {
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
                                        (item.__typename === 'Movie')? <h4>
                                            {item.title}
                                        </h4>
                                        : (item.__typename === 'TvShow') ? <h4>
                                            {item.name}
                                        </h4>
                                        : null
                                    }
                                    {
                                        (item.__typename === 'Movie')? <h4>
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
                                            addToWatchlist(item)
                                        }}
                                        disabled={
                                            myState?.Watchlist?.find((w: T) => w.id === item.id)? true
                                            : myState?.Watched?.find((w: T) => w.id === item.id)? true
                                            : false
                                        }
                                    >
                                        Add to Watchlist
                                    </button>
                                    <button
                                        className='watch_button'
                                        onClick={() => {
                                            addToWatched(item)
                                        }}
                                        disabled={
                                            myState?.Watched?.find((w: T) => w.id === item.id)? true
                                            : false
                                        }
                                    >
                                        Add to Watched
                                    </button>
                                    {
                                        (item.__typename === 'Movie')? <NavLink
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

export default Search;