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
        <>
            <header className="sticky top-0 z-50 shadow-2xl bg-slate-900">
                <Header />
            </header>
            <main className="bg-slate-100 ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </main>
            <footer className="bg-slate-900">
                <Footer />
            </footer>
        </>
    );
}

export default App;
