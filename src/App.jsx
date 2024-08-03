import './App.css'
import {Routes, Route} from "react-router-dom";
import Profile from "./Profile.jsx"
import Home from './Home.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/profile/:id" element={<Profile />} />
            </Routes>
        </>
    )
}

export default App
