import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name,website} = user;
    return (
        <div>
            <h2>User details show here</h2>
            <h3>{name}</h3>
            <mark>Website:{website}</mark>
        </div>
    );
};

export default UserDetails;