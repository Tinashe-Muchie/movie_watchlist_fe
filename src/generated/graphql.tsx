import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A movie/Tv Show review author */
export type Author = {
  __typename?: 'Author';
  name?: Maybe<Scalars['String']>;
  avatar_path?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
};

/** Movie/Tv Show cast */
export type Cast = {
  __typename?: 'Cast';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
  character?: Maybe<Scalars['String']>;
};

/**
 * These are the people that created a Tv Show, to be used in the Tv Show
 * details type.
 */
export type Creators = {
  __typename?: 'Creators';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type Genres = {
  __typename?: 'Genres';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

/** The Movies type represents movies retrieved from discover movies */
export type Movie = {
  __typename?: 'Movie';
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Float']>;
  details?: Maybe<MovieDetails>;
  credits?: Maybe<Array<Cast>>;
  reviews?: Maybe<Array<Maybe<Reviews>>>;
  videos?: Maybe<Array<Maybe<Videos>>>;
};

export type MovieDetails = {
  __typename?: 'MovieDetails';
  genres?: Maybe<Array<Maybe<Genres>>>;
  id: Scalars['Int'];
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
};

export type Movies = {
  __typename?: 'Movies';
  page: Scalars['Int'];
  results: Array<Movie>;
  total_results: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getMovies: Movies;
  getTvShows: TvShows;
  getTopRatedMovies: Array<Movie>;
  getUpcomingMovies: Array<Movie>;
  getTopRatedTvShows: Array<TvShow>;
  search?: Maybe<Array<Search>>;
};


export type QueryGetMoviesArgs = {
  page: Scalars['Int'];
};


export type QueryGetTvShowsArgs = {
  page: Scalars['Int'];
};


export type QuerySearchArgs = {
  name: Scalars['String'];
};

/** Movie/TvShows reviews */
export type Reviews = {
  __typename?: 'Reviews';
  author_details?: Maybe<Author>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** The Search returns either Movies or TvShows */
export type Search = Movies | TvShows;

export type Seasons = {
  __typename?: 'Seasons';
  air_date?: Maybe<Scalars['String']>;
  episode_count?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
};

/** The Tv Shows type represents movies retrieved from discover Tv Shows */
export type TvShow = {
  __typename?: 'TvShow';
  poster_path?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  vote_average?: Maybe<Scalars['Float']>;
  first_air_date?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  details?: Maybe<TvShowDetails>;
  credits?: Maybe<Array<Cast>>;
  reviews?: Maybe<Array<Maybe<Reviews>>>;
  videos?: Maybe<Array<Maybe<Videos>>>;
};

export type TvShowDetails = {
  __typename?: 'TvShowDetails';
  created_by?: Maybe<Array<Maybe<Creators>>>;
  first_air_date?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  id: Scalars['Int'];
  last_air_date?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number_of_episodes?: Maybe<Scalars['Int']>;
  number_of_seasons?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  seasons?: Maybe<Array<Maybe<Seasons>>>;
  vote_average?: Maybe<Scalars['Float']>;
  overview?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
};

export type TvShows = {
  __typename?: 'TvShows';
  page: Scalars['Int'];
  results: Array<TvShow>;
  total_results: Scalars['Int'];
};

/** Videos is used to retrieve trailers for movies/ Tv Shows */
export type Videos = {
  __typename?: 'Videos';
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type QueryQueryVariables = Exact<{
  getMoviesPage: Scalars['Int'];
}>;


export type QueryQuery = { __typename?: 'Query', getMovies: { __typename?: 'Movies', page: number, total_results: number, results: Array<{ __typename?: 'Movie', poster_path?: Maybe<string>, release_date?: Maybe<string>, id: number, title?: Maybe<string>, vote_average?: Maybe<number>, details?: Maybe<{ __typename?: 'MovieDetails', poster_path?: Maybe<string>, release_date?: Maybe<string>, revenue?: Maybe<number>, runtime?: Maybe<number>, title?: Maybe<string>, vote_average?: Maybe<number>, id: number, overview?: Maybe<string>, tagline?: Maybe<string>, genres?: Maybe<Array<Maybe<{ __typename?: 'Genres', id: number, name?: Maybe<string> }>>> }>, credits?: Maybe<Array<{ __typename?: 'Cast', id: number, name?: Maybe<string>, profile_path?: Maybe<string>, character?: Maybe<string> }>>, reviews?: Maybe<Array<Maybe<{ __typename?: 'Reviews', content?: Maybe<string>, id?: Maybe<string>, author_details?: Maybe<{ __typename?: 'Author', name?: Maybe<string>, avatar_path?: Maybe<string>, rating?: Maybe<string> }> }>>>, videos?: Maybe<Array<Maybe<{ __typename?: 'Videos', name?: Maybe<string>, key?: Maybe<string>, site?: Maybe<string>, type?: Maybe<string>, id?: Maybe<string> }>>> }> } };


export const QueryDocument = gql`
    query Query($getMoviesPage: Int!) {
  getMovies(page: $getMoviesPage) {
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
        revenue
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

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *      getMoviesPage: // value for 'getMoviesPage'
 *   },
 * });
 */
export function useQueryQuery(baseOptions: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;