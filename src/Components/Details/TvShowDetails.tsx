import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context/GlobalContext';
import { Videos, Reviews, TvShowDetails, Cast, TvShows } from '../../generated/tvshows';
import { Modal } from '../Modal/Modal';
import { CAST_DETAILS } from './Cast/CastDetails';
import {REVIEWS_DETAILS} from './Reviews/ReviewsDetails';
import './details.css';

interface TvShowsStateIF {
    details: TvShowDetails | undefined;
    reviews: [Reviews] | undefined;
    credits: [Cast] | undefined;
    videos: [Videos] | undefined;
    title: string | undefined;
    id: number | undefined;
    show: TvShows | undefined;
} 

export const TvShowDetail: React.FunctionComponent = () => {

    const location = useLocation(); 
    const state = location.state as TvShowsStateIF;
    const { showModal, setShowModal } = useContext(Context);
    /*create a state that will help in showing either the first 6 characters or all of the
    characters in a movie */
    const [ open, setOpen ] = useState<boolean>(false); 
    /*create a state, show, that will help in showing either the first review or all the
    reviews in a movie */
    const [ show, setShow ] = useState<boolean>(false);

    return (
        <>
            <div className='detail_box'>
                <img
                    src={`https://image.tmdb.org/t/p/original/${state?.details?.poster_path}`}
                    alt='movie poster'
                />
                <div className='content_detail_box'>
                    <h2> {state?.details?.name} </h2>
                    <h3> {state?.details?.tagline} </h3>
                    <div className='genres_wrapper'>
                    {state?.details?.genres?.map((genre)=> (
                        <div className='genres'
                            key={genre?.id}
                        >
                            {genre?.name}
                        </div>
                    ))}
                    </div>
                    <p className='overview'> {state?.details?.overview} </p>
                    <div className='buttons_wrapper'>
                        <button className='watch_button'
                            onClick={()=>setShowModal(true)}
                        >
                            View Trailer
                        </button>
                    </div>
                </div>
            </div>
            <div className='credits_container'>
                <div className='credits_heading_wrapper'>
                    <h3> Cast Members </h3>
                    <button
                        className='show_button'
                        onClick={()=> setOpen(!open)}
                    > {open ? 'show less cast members' : 'show more cast members'} </button>
                </div>
                <div className='credits_content_grid'>
                {
                    (!open) ?
                    state?.credits?.slice(0, 6).map((credit: Cast) => { return (<CAST_DETAILS credit={credit} /> ); })
                    : state?.credits?.map((credit: Cast) => { return (<CAST_DETAILS credit={credit}/>);})
                }
                </div>
            </div>
            <div className='reviews_container'>
                <div className='reviews_heading_wrapper'>
                    <h3> Reviews </h3>
                    <button
                        className='show_button'
                        onClick={()=> setShow(!show)}
                    > {show ? 'show less reviews' : 'show more reviews'} </button>
                </div>
                {
                    (!show) ?
                    state?.reviews?.slice(0,1).map((review: Reviews) => { return ( <REVIEWS_DETAILS review={review}/> );})
                    : state?.reviews?.map((review: Reviews) => { return (
                            <div className='reviews_wrapper'> <REVIEWS_DETAILS review={review}/> </div>
                        ); })
                }   
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}