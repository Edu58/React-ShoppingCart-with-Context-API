import {RiStarSFill, RiStarSLine} from 'react-icons/ri'

const Rating = ({rating, click}) => {
    return (
        <> 
           {
               [...Array(5)].map((_, i) => {
                return (
                    <span key={i} onClick={() => click(i+1)}>
                        {rating > i ? (<RiStarSFill fontSize="23px" color='#F4D03F'  style={{'cursor':'pointer'}} />) : (<RiStarSLine fontSize="23px" style={{'cursor':'pointer'}} />)}
                    </span>
                )
               })
           }
        
        </>
    );
};

export default Rating;