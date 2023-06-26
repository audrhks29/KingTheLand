import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MemberDetail = ({ data }) => {
    const { actorId } = useParams();
    const navigate = useNavigate();
    const goToPage = () => {
        navigate('/')
    }
    const { img, actorName, name, actorTitle, introduce } = data[actorId];
    // console.log(data.actorName);
    return (
        <>
            <div className='memberDetail'>
                <img src={img} alt={actorName} />
                <div className='memberIntro'>
                    <span><strong>{name}</strong>{actorName}</span>
                    <em>{actorTitle}</em>
                    {
                        introduce && introduce.split('\n').map((splitItem, index) => {
                            return <p key={index}>{splitItem}</p>
                        })}
                    {/* filteredItems[selectedMovieIndex].info && filteredItems[selectedMovieIndex].info.split('\n').map((splitItem, index) => {
                    return <span key={index}>{splitItem}</span> */}
                </div>
                <button onClick={goToPage}>Go Back</button>
            </div>

        </>
    );
};

export default MemberDetail;