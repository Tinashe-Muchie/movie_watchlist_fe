import { Movies } from "../../../generated/gql";
import { NavLink } from "react-router-dom";
import '../toprated.css';

export const MOVIE = ({movie}:{movie: Movies}) => {
    return (
        <div className="toprated_image_container">
            <img 
                className="toprated_image"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                alt='' 
                key={movie.id}
            />
            <div className='side_container'>
                <h2 className='show_name'>{movie.title}</h2>
                <h3> {movie.release_date?.slice(0, 4)} </h3> 
                {
                    (movie.__typename === 'Movies') ? <NavLink
                        className='watch_button_navlink'
                        to="/tvshowdetails"
                        state={{
                            details: movie.details,
                            reviews: movie.reviews,
                            videos: movie.videos,
                            id: movie.id,
                            credits: movie.credits
                        }}
                        >
                            <button
                                className='watch_button'
                                    >More Info</button>
                        </NavLink>
                        : (movie.__typename === 'Movie') ? <NavLink
                            className='watch_button_navlink'
                            to="/tvshowdetails"
                            state={{
                                details: movie.details,
                                reviews: movie.reviews,
                                videos: movie.videos,
                                id: movie.id,
                                credits: movie.credits
                            }}
                        >
                            <button
                                className='watch_button'
                            >More Info</button>
                        </NavLink>
                        : null
                        }                  
                <button className='watch_button'>
                    Add to Watchlist
                </button>  
                <button className='watch_button'>
                    Add to Watched
                </button>   
            </div>
        </div> 
    );
}