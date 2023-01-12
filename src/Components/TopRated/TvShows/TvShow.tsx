import React, { useState } from 'react';
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go'; 
import { ApolloError } from '@apollo/client';
import { QueryQuery } from '../../../generated/ttv';
import { TVSHOW } from './TvShowLayout';
import '../toprated.css';

export const TopRatedShowsLayout: React.FunctionComponent<{
    loading: boolean,
    error: ApolloError | undefined,
    data: QueryQuery | undefined
  }> = ({ loading, error, data }) => {

    const [ current, setCurrent ] = useState<number>(0);
    /*if the current slide number is equal to 0, it means that there 
    is no slide to go back to therefore set disabled to true*/
    const ldisabled:boolean = (current === 0) ? true : false;
    /*if the current slide number is equal to 20, it means we have reached
    the end of the slides therefore set disabled to true*/
    const rdisabled:boolean = (current === 19) ? true : false;

    const next = (): void => {
        //increase the current slide number by one
        setCurrent(current + 1);
    }

    const prev = (): void => {
        //decrease the current slide number by 1
        setCurrent(current -1);
    }

    return(
        <section className='toprated_wrapper'>
            <button 
                className='toprated_button'
                onClick={()=> prev()}
                disabled={ldisabled}
            >
                <GoArrowSmallLeft />
            </button>
            <div className='image_container'>
                {
                    loading ? <div className='skeleton'/>
                    : error ? <p>Oh no! {error.message} </p>
                    : data?.getTopRatedTvShows.map((show,index)=> {
                        return (
                            <>
                            {
                                (index === current)
                                ?   <TVSHOW show={show} />  
                                :   <img 
                                        className='hidden_images'
                                        src={`https://image.tmdb.org/t/p/original/${show.poster_path}`} 
                                        alt='' 
                                        key={show.id}
                                    /> 
                            }
                            </>
                        );
                    })  
                }   
            </div>
            <button
                className='toprated_button'
                onClick={()=>  next()}
                disabled={rdisabled}
            >
                <GoArrowSmallRight />
            </button>
        </section> 
    );
}