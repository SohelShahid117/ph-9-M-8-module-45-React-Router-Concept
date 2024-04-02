import { useLoaderData } from "react-router-dom";
import SingleUser from "../SingleUser/SingleUser";

import './Users.css'


const Users = () => {
    const userssss = useLoaderData();
    console.log(userssss)
    return (
        <div>
            <h2>Our users:{userssss.length}</h2>
            <p>our vodroooo userssssssss</p>
            <div className="users">
                {
                    userssss.map((user)=><SingleUser key={user.id} user={user}></SingleUser>)
                }
            </div>
            
        </div>
    );
};

export default Users;