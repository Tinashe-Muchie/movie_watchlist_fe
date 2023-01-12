import { useQuery } from '@apollo/client';
import { TOPRATEDMOVIES } from '../../Queries/index';
import { QueryQuery } from '../../generated/gql';
import { TopRatedMoviesLayout } from '../../Components/index';
import './toprated.css';

function TopRatedMovies() {

    const { loading, error, data } = useQuery<QueryQuery>(TOPRATEDMOVIES);
    
    return (
        <div className='toprated_container'>
        <h2> Top Rated Movies </h2>
        <TopRatedMoviesLayout 
            loading={loading}
            error={error}
            data={data}
        />
        </div>
    );
}

export default TopRatedMovies;