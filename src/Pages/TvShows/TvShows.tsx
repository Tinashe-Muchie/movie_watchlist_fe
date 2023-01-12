import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Context } from '../../Context/GlobalContext';
import TopRatedTvShows from '../TopRated/TopRatedTvShows';
import { TvShowsLayout } from '../../Components/index';
import { TvShowsPagination } from '../../Components/index';
import { QueryQuery } from '../../generated/tvshows';

function TvShows() {

    const { TvSHOWS } = useContext(Context);

    const { loading, error, data } = useQuery<QueryQuery>(TvSHOWS);
    return (
        <>
        <TopRatedTvShows />
        <section className='main_section_wrapper'>
            <h2>
                Discover More Shows
            </h2>
            <TvShowsLayout 
                loading={loading}
                error={error}
                data={data}
            />
            <TvShowsPagination />
        </section>
        </>
    );
}

export default TvShows;