import {Reviews} from '../../../generated/gql';

export const REVIEWS_DETAILS = ({review}: {review: Reviews}) => {
    return (
        <>
            <div className='reviews_image_wrapper'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${review.author_details?.avatar_path}`}
                    alt='authors avatar'
                />
                <h3> {review.author_details?.name} </h3>
            </div>
            <p className='reviews_content'> {review.content} </p>
        </>
    );
}