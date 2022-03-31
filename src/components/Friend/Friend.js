import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props.friend);
    const {name, username, id} = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        // const path = `/friends/${id}`
        // navigate(path);
        navigate('/friend/' + id);
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;