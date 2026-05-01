
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import { Link ,Route,Routes} from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </>
    )
}