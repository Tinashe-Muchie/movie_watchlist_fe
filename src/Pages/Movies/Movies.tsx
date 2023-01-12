import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { QueryQuery } from '../../generated/graphql';
import TopRatedMovies from '../TopRated/TopRatedMovies';
import { Pagination } from '../../Components/index';
import { Context } from '../../Context/GlobalContext'; 
import { MoviesLayout } from '../../Components/index';

export const Movies: React.FunctionComponent = () => {

    const { MOVIES } = useContext(Context);

    const { loading, error, data } = useQuery<QueryQuery>(MOVIES);
    console.log(data) 
    return (
        <> 
        <TopRatedMovies />
        <section className='main_section_wrapper'>
            <h2>
                Discover More Movies
            </h2>
            <MoviesLayout 
                loading={loading}
                error={error}
                data={data}
            />
            <Pagination />
        </section>
        </>
    );
}
