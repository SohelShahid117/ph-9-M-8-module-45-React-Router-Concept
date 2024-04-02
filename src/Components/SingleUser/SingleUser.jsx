import { Link } from "react-router-dom";

const SingleUser = ({user}) => {
    const {id,email,phone,name} = user;
    // console.log(user)
    // console.log(id)
    // console.log(email)
    const userStyle = {
        border : '2px solid lightGreen',
        padding : '10px',
        margin : '10px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h3>Phone : {phone} </h3>
            <h3>Email : {email} </h3>
            {/* <Link to={`/user/${id}`}>Show details</Link> */}
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default SingleUser;