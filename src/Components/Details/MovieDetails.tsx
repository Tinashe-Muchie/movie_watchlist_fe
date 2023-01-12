import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Videos, Reviews, MovieDetails, Cast, Movies } from '../../generated/gql';
import { Context } from '../../Context/GlobalContext';
import { Modal } from '../Modal/Modal';
import { REVIEWS_DETAILS } from './Reviews/ReviewsDetails';
import { CAST_DETAILS } from './Cast/CastDetails';

interface MoviesStateIF {
    details: MovieDetails | undefined;
    reviews: [Reviews] | undefined;
    credits: [Cast] | undefined;
    videos: [Videos] | undefined;
    title: string | undefined;
    id: number | undefined;
    movie: Movies | undefined;
}

export const MovieDetail = () => {

    const location = useLocation(); 
    const state = location.state as MoviesStateIF;
    const { showModal, setShowModal } = useContext(Context);
    /*create a state that will help in showing either the first 6 characters or all of the
    characters in a movie */
    /*use open is equal to false for now, change to useState later*/
    const [ open, setOpen ] = useState(false);
    /*create a state, show, that will help in showing either the first review or all the
    reviews in a movie */
   const [ show, setShow ] = useState(false);

    return (
        <>
            <div className='detail_box'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${state?.details?.poster_path}`}
                    alt='movie poster'
                />
                <div className='content_detail_box'>
                    <h2> {state?.details?.title} </h2>
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
                        <button 
                            className='watch_button'
                            onClick={()=>setShowModal(true)}
                        >
                            View Trailer
                        </button>
                    </div>    
                </div>
            </div>
            <div className='credits_container'>
                <div className='credits_heading_wrapper'>
                    <h3 className='credits_heading'> Cast Members </h3>
                    <button
                        className='show_button'
                        onClick={()=> setOpen(!open)}
                    > {open ? 'show less cast members' : 'show more cast members'} </button>
                </div>
                <div className='credits_content_grid'>
                {
                    (!open) ?
                    state?.credits?.slice(0, 6).map((credit: Cast) => { return (<CAST_DETAILS credit={credit} />); })
                    : state?.credits?.map((credit: Cast) => { return (<CAST_DETAILS credit={credit} />); })
                }
                </div>
            </div>
            <section className='reviews_container'>
                <div className='reviews_heading_wrapper'>
                    <h3 className='reviews_heading'> Reviews </h3>
                    <button
                        className='show_button'
                        onClick={()=> setShow(!show)}
                    > {show ? 'show less reviews' : 'show more reviews'} </button>
                </div>
                {
                    (!show) ?
                    state?.reviews?.slice(0,1).map((review: Reviews) => { return ( <REVIEWS_DETAILS review={review}/>);})
                    : state?.reviews?.map((review: Reviews) => { return (
                            <div className='reviews_wrapper'> <REVIEWS_DETAILS review={review}/> </div>
                        );
                    })
                } 
            </section>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}