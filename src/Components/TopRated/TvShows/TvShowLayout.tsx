import {TvShows} from '../../../generated/ttv';
import {NavLink} from 'react-router-dom';
import '../toprated.css';

export const TVSHOW = ({show}: {show : TvShows}) => {
    return (
        <div className='toprated_image_container'>
            <img 
                className='toprated_image' 
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`} 
                alt='' 
                key={show.id}
            />
            <div className='side_container'>
                <h2 className='show_name'>{show.name}</h2>
                <h3>{show.first_air_date?.slice(0, 4)} </h3>
                {
                    (show.__typename === 'TvShows') ? <NavLink
                        className='watch_button_navlink'
                        to="/tvshowdetails"
                        state={{
                            details: show.details,
                                reviews: show.reviews,
                                videos: show.videos,
                                id: show.id,
                                credits: show.credits
                        }}
                        >
                            <button
                                className='watch_button'
                                    >More Info</button>
                        </NavLink>
                        : (show.__typename === 'TvShow') ? <NavLink
                            className='watch_button_navlink'
                            to="/tvshowdetails"
                            state={{
                                details: show.details,
                                reviews: show.reviews,
                                videos: show.videos,
                                id: show.id,
                                credits: show.credits
                            }}
                        >
                            <button
                                className='watch_button'
                            >More Info</button>
                        </NavLink>
                        : null
                        }                  
                <button className='watch_button'> Add to Watchlist </button>  
                <button className='watch_button'>
                    Add to Watched
                </button>   
            </div>
         </div>
    );
}