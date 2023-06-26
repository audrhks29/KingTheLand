import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Member = ({ item }) => {
    const navigate = useNavigate();
    const { img, name } = item
    const goToPage = () => {
        navigate(`/member/${item.actorId - 1}`)
    }
    return (
        <li>
            <img src={img} alt={name} onClick={goToPage} />
            <p>{name}</p>
            {/* <button onClick={goToPage}>자세히보기</button> */}
        </li>
    );
};

export default Member;