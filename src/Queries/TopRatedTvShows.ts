import { DocumentNode, gql } from '@apollo/client';

export const TOPRATEDTvSHOWS: DocumentNode = gql`
    query Query {
        getTopRatedTvShows {
            poster_path
            id
            vote_average
            first_air_date
            name
            details {
            created_by {
                name
                profile_path
                id
            }
            first_air_date
            genres {
                id
                name
            }
            id
            last_air_date
            name
            number_of_episodes
            number_of_seasons
            poster_path
            seasons {
                air_date
                episode_count
                id
                name
                poster_path
                season_number
            }
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
                avatar_path
                name
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

