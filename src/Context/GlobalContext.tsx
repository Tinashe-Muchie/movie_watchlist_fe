import React, 
    { createContext, useState, useReducer, 
        useEffect, 
        ReactNode} from 'react';
import { DocumentNode, gql } from '@apollo/client';
import { Movies, TvShows } from '../generated/gql';

export const Context = createContext<any | {}>({});
//type T describes both the movie and tvshow types
type T = Movies | TvShows;

//state interface
interface stateIF {
    Watchlist: Array<T>;
    Watched: Array<T>;
}

type actionType = 
 | { type: 'ADD_TO_WATCHLIST', value: T}
 | { type: 'ADD_TO_WATCHED', value: T}
 | { type: 'REMOVE_FROM_WATCHLIST', value: number}
 | { type: 'REMOVE_FROM_WATCHED', value: number}


const initialState: stateIF = {
    Watchlist: localStorage.getItem('watchlist')?
                JSON.parse((localStorage.getItem('watchlist')) as string)
                : [],
    Watched: localStorage.getItem('watched')?
                JSON.parse((localStorage.getItem('watched')) as string)
                : []
}

const reducer = (state: stateIF, action: actionType) => {
    switch(action.type){
        case 'ADD_TO_WATCHLIST':
            return {
                ...state, 
                Watchlist: [ action.value, ...state.Watchlist ]
            }
        case 'ADD_TO_WATCHED':
            return {
                ...state,
                Watched: [ action.value, ...state.Watched ]
            }
        case 'REMOVE_FROM_WATCHLIST':
            return {
                ...state,
                Watchlist: state.Watchlist.filter(item=> item.id !== action.value)
            }
        case 'REMOVE_FROM_WATCHED':
            return {
                ...state,
                Watched: state.Watched.filter(item => item.id !== action.value)
            }
        default:
            return state
    }
}

type ContextProps = {
    children : ReactNode
}

export const GlobalContext = (props: ContextProps) => {

    //set the current movie Page that is displayed
    const [currentMoviePage, setCurrentMoviePage] = useState<number>(1);
    //set the current movie Page that is displayed
    const [currentShowPage, setCurrentShowPage] = useState<number>(1);
    const [search, setSearch] = useState<string | null>('');

    //title represents the information to be displayed in the popup box
    const [title, setTitle] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [ myState, dispatch] = useReducer(reducer, initialState);

    const addToWatchlist = (item: T) => {
        dispatch({
            type: 'ADD_TO_WATCHLIST',
            value: item,
        })
    }
    const addToWatched = (item: T) => {
        dispatch({
            type: 'ADD_TO_WATCHED',
            value: item
        })
    }
    const removeFromWatchlist = (id: number)=>{
        dispatch({
            type: 'REMOVE_FROM_WATCHLIST',
            value: id
        })
    }
    const removeFromWatched = (id: number) =>{
        dispatch({
            type: 'REMOVE_FROM_WATCHED',
            value:id
        })
    }

    useEffect(()=>{
        localStorage.setItem('watchlist', JSON.stringify(myState.Watchlist))
        localStorage.setItem('watched', JSON.stringify(myState.Watched))
    }, [myState])

    const MOVIES: DocumentNode = gql`
    {
        getMovies(page: ${currentMoviePage}) {
            page
            total_results
            results {
                poster_path
                release_date
                id
                title
                vote_average
                details {
                    genres {
                    id
                    name
                    }
                    poster_path
                    release_date
                    runtime
                    title
                    vote_average
                    id
                    overview
                    tagline
                }
                credits {
                    id
                    name
                    profile_path
                    character
                }
                reviews {
                    author_details {
                    name
                    avatar_path
                    rating
                    }
                    content
                    id
                }
                videos {
                    name
                    key
                    site
                    type
                    id
                }
            }
        }
    }
    `;

    const SEARCH: DocumentNode = gql`
    {
        search(name: "${search}") {
            ...on Movie{
                poster_path
                release_date
                id
                title
                vote_average
                details{
                    genres{
                    id
                    name
                    }
                    id
                    poster_path
                    release_date
                    runtime
                    title
                    vote_average
                    overview
                    tagline
                }
                credits{
                    id
                    name
                    profile_path
                    character
                }
                reviews{
                    author_details{
                    name
                    avatar_path
                    rating
                    }
                    content
                    id
                }
                videos{
                    name
                    key
                    site
                    type
                    id
                }
            }
            ...on TvShow{
                poster_path
                id
                vote_average
                first_air_date
                name
                details{
                    created_by{
                    id
                    name
                    profile_path
                    }
                    first_air_date
                    genres{
                    id
                    name
                    }
                    id
                    last_air_date
                    name
                    number_of_seasons
                    number_of_episodes
                    poster_path
                    seasons{
                    air_date
                    episode_count
                    id
                    name
                    poster_path
                    season_number
                    }
                    vote_average
                    overview
                    tagline
                }
                credits{
                    id
                    name
                    profile_path
                    character
                }
                reviews{
                    id
                    content
                    author_details{
                    name
                    avatar_path
                    rating
                    }
                }
                videos{
                    name
                    key
                    site
                    type
                    id
                }
            }
        }
    }
    `;

    const TvSHOWS: DocumentNode = gql`
    {
        getTvShows(page: ${currentShowPage}) {
            page
            total_results
            results {
            poster_path
            id
            vote_average
            first_air_date
            name
            details {
                created_by {
                name
                id
                profile_path
                }
                first_air_date
                genres {
                id
                name
                }
                id
                last_air_date
                name
                number_of_episodes
                number_of_seasons
                poster_path
                seasons {
                air_date
                episode_count
                id
                name
                poster_path
                season_number
                }
                vote_average
                overview
                tagline
            }
            credits {
                id
                name
                profile_path
                character
            }
            reviews {
                author_details {
                name
                avatar_path
                rating
                }
                content
                id
            }
            videos {
                name
                key
                site
                type
                id
            }
            }
        }
    }
    `;

    const value = {
        currentMoviePage,
        setCurrentMoviePage,
        currentShowPage,
        setCurrentShowPage,  
        setSearch,
        myState,
        addToWatchlist,
        addToWatched,
        removeFromWatchlist,
        removeFromWatched,
        title,
        setTitle,
        showPopup,
        setShowPopup,
        showModal, 
        setShowModal,
        MOVIES,
        SEARCH,
        TvSHOWS
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}


