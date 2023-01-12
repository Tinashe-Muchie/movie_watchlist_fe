import { DocumentNode, gql } from '@apollo/client';

export const TOPRATEDMOVIES: DocumentNode = gql`
    query Query {
        getTopRatedMovies {
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
            id
            poster_path
            release_date
            runtime
            title
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
`;

