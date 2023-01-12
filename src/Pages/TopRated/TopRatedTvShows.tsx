import React from 'react';
import { useQuery } from '@apollo/client';
import { TOPRATEDTvSHOWS } from '../../Queries/index';
import { TopRatedShowsLayout } from '../../Components/index';
import { QueryQuery } from '../../generated/ttv';
import './toprated.css';

function TopRatedTvShows() {

    const { loading, error, data } = useQuery<QueryQuery>(TOPRATEDTvSHOWS);
    return (
        <div className='toprated_container'>
        <h2> Top Rated Shows </h2>
        <TopRatedShowsLayout 
            loading={loading}
            error={error}
            data={data}
        />
        </div>
    );
}

export default TopRatedTvShows;