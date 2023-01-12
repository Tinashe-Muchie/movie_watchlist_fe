import {Cast} from '../../../generated/gql';
import '../details.css';

export const CAST_DETAILS = ({credit}: {credit: Cast }) => {
    return (
        <div className='credits_image_wrapper'>
            <img
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt="character"
            />
            <div className='credits_title'>
                {`${credit.name}`}
            </div>
            <div className='credits_title'> as </div>
            <div className='credits_title'> {`${credit.character}`} </div>
        </div>
    );
}