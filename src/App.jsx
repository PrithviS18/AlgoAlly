import './App.css'
import {
    Routes, Route
} from "react-router-dom";
import Profile from "./Profile.jsx"

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/profile/:id" element={<Profile />} />
            </Routes>
        </>
    )
}

export default App
