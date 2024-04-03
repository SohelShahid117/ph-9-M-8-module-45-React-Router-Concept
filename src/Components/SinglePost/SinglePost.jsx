
import { Link, useNavigate } from 'react-router-dom';
const SinglePost = ({post}) => {
    // console.log(post);
    const {id,title,body} = post;
    // console.log(`${id}.${title}`);
    const postStyle = {
        border : '2px solid lightGreen',
        padding : '10px',
        margin : '10px',
        borderRadius:'20px'
    }

    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/posts/${id}`)
    }


    return (
        <div style={postStyle}>
            <h2>Post of Id : {id}</h2>
            <h3>{title}</h3>
            {/* <Link to = {`/`}>Show Post Details</Link> */}
            {/* <Link to = {`/posts/${id}`}>Show Post Details</Link> */}
            <Link to = {`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetail}>Click To See Details</button>
            
        </div>
    );
};

export default SinglePost;