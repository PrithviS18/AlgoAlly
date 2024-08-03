import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile.jsx"
import Home from './Home/Home.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/profile/:id" element={<Profile />} />
            </Routes>
        </>
    )
}

export default App
