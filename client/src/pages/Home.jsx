import { Link } from "react-router-dom";

const HomePage = () => {
    return ( 
        <div>
            <h2>Home page</h2><br /><br />
            <Link to='/login'>Login</Link><br /><br />
            <Link to='/signup'>Signup</Link><br /><br />
            <Link to='/user-dashboard/info-form'>Info Form</Link><br /><br />
            <Link to='/user-dashboard/edit-form'>Edit Form</Link>
        </div>
     );
}
 
export default HomePage;