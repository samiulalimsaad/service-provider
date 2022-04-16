import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
