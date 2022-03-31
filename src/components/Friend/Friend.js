import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props.friend);
    const {name, username, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friends/${id}`
        navigate(path);
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;