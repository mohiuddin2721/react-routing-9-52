import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const {friendId} = useParams();
    return (
        <div>
            {/* <h1>This is detail of my dosto. {params.friendId}</h1> */}
            <h1>This is detail of my dosto: {friendId}</h1>
        </div>
    );
};

export default FriendDetail;