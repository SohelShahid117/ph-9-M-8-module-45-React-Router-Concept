import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const Posts = () => {
    const posttt = useLoaderData();
    console.log(posttt);

    return (
        <div>
            <h2>All posts here,Post length : {posttt.length}</h2>
           <div className="users">
                {
                    // posttt.map((x)=>console.log(x))
                    posttt.map((p)=><SinglePost key={p.id} post = {p}></SinglePost>)
                }
           </div>
            
        </div>
    );
};

export default Posts;