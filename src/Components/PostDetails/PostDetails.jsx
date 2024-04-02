import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const pst = useLoaderData();
    console.log(pst)
    return (
        <div>
            <h2>Posts details here</h2>
            
        </div>
    );
};

export default PostDetails;