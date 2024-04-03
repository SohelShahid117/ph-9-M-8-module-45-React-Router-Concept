import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const pst = useLoaderData();
    console.log(pst)
    const {id,title,body} = pst;
    console.log(title)

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>Posts details here</h2>
            <h5>id : {id} </h5>
            <h3>title : {title} </h3>
            <p>Description : {body} </p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;