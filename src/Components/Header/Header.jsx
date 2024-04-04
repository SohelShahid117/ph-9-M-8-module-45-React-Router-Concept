import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <h2>My website</h2>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
               <NavLink to="/users">Usersss</NavLink>
               <Link to="/users">Users</Link>
               <Link to="/posts">Posts</Link>
               <NavLink to="/posts">Postssssssssss</NavLink>

                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
            </nav>
            
        </div>
    );
};

export default Header;