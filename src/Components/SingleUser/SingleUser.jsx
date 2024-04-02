
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
            
        </div>
    );
};

export default SingleUser;