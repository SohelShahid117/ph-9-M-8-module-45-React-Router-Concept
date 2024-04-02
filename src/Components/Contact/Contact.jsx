import React from 'react';
import { Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h2>Contact us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore.</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;