import { ApolloError } from '@apollo/client';
import { QueryQuery } from '../../../generated/graphql';
import { LAYOUT } from './Layout';

export const MoviesLayout: React.FunctionComponent<{
    loading: boolean | undefined,
    error: ApolloError | undefined
    data: QueryQuery | undefined
}> = ({loading, error, data}) => {

    /*create a new array that will be used to display skeletons 
    while loading*/
    const newArray: number[] = [];
    for(let i:number = 1; i <= 20; i++) {
        newArray.push(i);
    }

    return (
        <>
        <ul className='grid_container'>
            {
                loading ? newArray.map((item, index)=> { return( <li key={index}> <div className='skeleton'></div> </li> ); })
                : error ? <h3>Oh no! {error.message} </h3>
                : data?.getMovies?.results.map((movie) => { return ( <LAYOUT movie={movie} />);})
            }
        </ul>
        </>
    );
}