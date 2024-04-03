import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const pst = useLoaderData();
    console.log(pst)
    const {id,title,body} = pst;
    console.log(title)
    return (
        <div>
            <h2>Posts details here</h2>
        </div>
    );
};

export default PostDetails;